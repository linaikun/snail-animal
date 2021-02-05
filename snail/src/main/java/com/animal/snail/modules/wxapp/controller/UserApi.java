package com.animal.snail.modules.wxapp.controller;

import cn.binarywang.wx.miniapp.api.WxMaService;
import cn.binarywang.wx.miniapp.api.impl.WxMaServiceImpl;
import cn.binarywang.wx.miniapp.bean.WxMaJscode2SessionResult;
import com.animal.snail.modules.wxapp.entity.dto.LitemallUser;
import com.animal.snail.modules.wxapp.entity.dto.UserInfo;
import com.animal.snail.modules.wxapp.entity.dto.WxLoginInfo;
import com.animal.snail.modules.wxapp.until.ResponseUtil;
import io.swagger.annotations.Api;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestController
@Validated
@RequestMapping("/snail/wxapp/login")
public class UserApi {


    @Autowired
    private BasicSetupController userService;

    @Autowired
    private WxMaService wxService;
    // 微信授权网址
    private static final String AUTHORIZE_URL ="https://api.weixin.qq.com/sns/jscode2session";
    //固定参数
    public static final String WX_LOGIN_GRANT_TYPE = "authorization_code";
    @Value("${snail.social.wxapp.appId}")
    private String appKey;

    @Value("${snail.social.wxapp.appSecret}")
    private String appSecret;

    @PostMapping("/getuser")
    public Object loginByWeixin(@RequestBody WxLoginInfo wxLoginInfo, HttpServletRequest request) {
        String code = wxLoginInfo.getCode();
        UserInfo userInfo = wxLoginInfo.getUserInfo();
        if (code == null || userInfo == null) {
            return ResponseUtil.badArgument();
        }

        String sessionKey = null;
        String openId = null;
        try {
            WxMaJscode2SessionResult result = this.wxService.getUserService().getSessionInfo(code);
            sessionKey = result.getSessionKey();
            openId = result.getOpenid();
        } catch (Exception e) {
            e.printStackTrace();
        }

        if (sessionKey == null || openId == null) {
            return ResponseUtil.fail();
        }

        LitemallUser user = null;
        if (user == null) {
            user = new LitemallUser();
            user.setUsername(openId);
            user.setPassword(openId);
            user.setWeixinOpenid(openId);
            user.setAvatar(userInfo.getAvatarUrl());
            user.setNickname(userInfo.getNickName());
            user.setGender(userInfo.getGender());
            user.setUserLevel((byte) 0);
            user.setStatus((byte) 0);
            user.setLastLoginTime(LocalDateTime.now());
            user.setSessionKey(sessionKey);

            //userService.add(user);

            // 新用户发送注册优惠券
            //couponAssignService.assignForRegister(user.getId());
        } else {
            user.setLastLoginTime(LocalDateTime.now());
            //user.setLastLoginIp(IpUtil.getIpAddr(request));
            user.setSessionKey(sessionKey);
            /*if (userService.updateById(user) == 0) {
                return ResponseUtil.updatedDataFailed();
            }*/
        }

        // token
        //String token = UserTokenManager.generateToken(user.getId());

        Map<Object, Object> result = new HashMap<Object, Object>();
        //result.put("token", token);
        result.put("userInfo", userInfo);
        return ResponseUtil.ok(result);
    }

        // token
        // String token = UserTokenManager.generateToken(user.getId());


        //result.put("token", token);
        //result.put("userInfo", userInfo);




}
