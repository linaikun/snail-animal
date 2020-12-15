package com.animal.snail.modules.social.controller;

import com.animal.snail.common.annotation.SystemLog;
import com.animal.snail.common.constant.CommonConstant;
import com.animal.snail.common.constant.SecurityConstant;
import com.animal.snail.common.enums.LogType;
import com.animal.snail.common.redis.RedisTemplateHelper;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.utils.SecurityUtil;
import com.animal.snail.common.vo.Result;
import com.animal.snail.config.security.SecurityUserDetails;
import com.animal.snail.modules.base.entity.User;
import com.animal.snail.modules.social.entity.Social;
import com.animal.snail.modules.social.service.SocialService;
import com.animal.snail.modules.social.vo.QQUserInfo;
import cn.hutool.core.util.IdUtil;
import cn.hutool.core.util.StrUtil;
import cn.hutool.http.HttpUtil;
import com.google.gson.Gson;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.concurrent.TimeUnit;

/**
 * http://wiki.connect.qq.com/
 * @author Snail
 */
@Slf4j
@Api(description = "QQ登录接口")
@RequestMapping("/snail/social/qq")
@Controller
public class QQController {

    @Value("${snail.social.qq.appId}")
    private String appId;

    @Value("${snail.social.qq.appKey}")
    private String appKey;

    @Value("${snail.social.qq.callbackUrl}")
    private String callbackUrl;

    @Value("${snail.social.callbackFeUrl}")
    private String callbackFeUrl;

    @Value("${snail.social.callbackFeRelateUrl}")
    private String callbackFeRelateUrl;

    private static final String STATE = SecurityConstant.QQ_STATE;

    private static final Integer TYPE = CommonConstant.SOCIAL_TYPE_QQ;

    @Autowired
    private SocialService socialService;

    @Autowired
    private SecurityUtil securityUtil;

    @Autowired
    private RedisTemplateHelper redisTemplate;

    /**
     * QQ认证服务器地址
     */
    private static final String AUTHORIZE_URL = "https://graph.qq.com/oauth2.0/authorize";

    /**
     * 申请令牌地址
     */
    private static final String ACCESS_TOKEN_URL = "https://graph.qq.com/oauth2.0/token";

    /**
     * 获取openId地址
     */
    private static final String OPEN_ID_URL = "https://graph.qq.com/oauth2.0/me?access_token=";

    /**
     * 获取用户信息地址
     */
    private static final String GET_USERINFO_URL = "https://graph.qq.com/user/get_user_info";

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    @ApiOperation(value = "获取qq认证链接")
    @ResponseBody
    public Result<Object> login() {

        // 生成并保存state 忽略该参数有可能导致CSRF攻击
        String state = String.valueOf(System.currentTimeMillis());
        redisTemplate.set(STATE + state, "VALID", 3L, TimeUnit.MINUTES);

        // 传递参数response_type、client_id、state、redirect_uri
        String url = AUTHORIZE_URL + "?response_type=code&" + "client_id=" + appId + "&state=" + state
                + "&redirect_uri=" + callbackUrl;

        return ResultUtil.data(url);
    }

    @RequestMapping(value = "/callback", method = RequestMethod.GET)
    @ApiOperation(value = "获取accessToken")
    @SystemLog(description = "QQ关联登录", type = LogType.LOGIN)
    public String getAccessToken(@RequestParam(required = false) String code,
                                 @RequestParam(required = false) String state) throws UnsupportedEncodingException {

        if (StrUtil.isBlank(code)) {
            return "redirect:" + callbackFeUrl + "?error=" + URLEncoder.encode("您未同意授权", "utf-8");
        }
        // 验证state
        String v = redisTemplate.get(STATE + state);
        redisTemplate.delete(STATE + state);
        if (StrUtil.isBlank(v)) {
            return "redirect:" + callbackFeUrl + "?error=" + URLEncoder.encode("授权超时或state不正确", "utf-8");
        }

        // 传递参数grant_type、code、redirect_uri、client_id
        String params = "grant_type=authorization_code&code=" + code + "&redirect_uri=" +
                callbackUrl + "&client_id=" + appId + "&client_secret=" + appKey;

        // 申请令牌 post请求
        String result = HttpUtil.post(ACCESS_TOKEN_URL, params);
        if (!result.contains("access_token=")) {
            return "redirect:" + callbackFeUrl + "?error=" + URLEncoder.encode("获取access_token失败", "utf-8");
        }

        String accessToken = StrUtil.subBetween(result, "access_token=", "&expires_in");

        String resultOpenId = HttpUtil.get(OPEN_ID_URL + accessToken);
        if (!resultOpenId.contains("openid")) {
            return "redirect:" + callbackFeUrl + "?error=" + URLEncoder.encode("获取openid失败", "utf-8");
        }

        String openId = StrUtil.subBetween(resultOpenId, "\"openid\":\"", "\"}");

        // 获取用户信息
        String userInfoUrl = GET_USERINFO_URL + "?access_token=" + accessToken + "&oauth_consumer_key=" + appId
                + "&openid=" + openId;
        String userInfo = HttpUtil.get(userInfoUrl);
        QQUserInfo q = new Gson().fromJson(userInfo, QQUserInfo.class);
        // 存入数据库
        Social qq = socialService.findByOpenIdAndPlatform(openId, TYPE);
        if (qq == null) {
            Social newqq = new Social().setOpenId(openId).setUsername(q.getNickname()).setAvatar(q.getFigureurl_1()).setPlatform(TYPE);
            qq = socialService.save(newqq);
        }

        String url = "";
        // 判断是否绑定账号
        if (StrUtil.isNotBlank(qq.getRelateUsername())) {
            // 已绑定 直接登录
            String JWT = securityUtil.getToken(qq.getRelateUsername(), true);
            // 存入redis
            String JWTKey = IdUtil.simpleUUID();
            redisTemplate.set(JWTKey, JWT, 2L, TimeUnit.MINUTES);
            url = callbackFeUrl + "?related=1&JWTKey=" + JWTKey;
            // 记录日志使用
            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                    new SecurityUserDetails(new User().setUsername(qq.getRelateUsername())), null, null);
            SecurityContextHolder.getContext().setAuthentication(authentication);
        } else {
            // 未绑定 Redis存入id
            String idToken = IdUtil.simpleUUID();
            redisTemplate.set(idToken, qq.getId(), 5L, TimeUnit.MINUTES);
            url = callbackFeRelateUrl + "?socialType=" + TYPE + "&id=" + idToken;
        }
        return "redirect:" + url;
    }
}
