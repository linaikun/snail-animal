package com.animal.snail.modules.social.controller;

import com.animal.snail.common.constant.CommonConstant;
import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.modules.base.entity.User;
import com.animal.snail.modules.base.service.UserService;
import com.animal.snail.modules.social.entity.Social;
import com.animal.snail.modules.social.vo.RelateUserInfo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.social.service.SocialService;
import cn.hutool.core.util.StrUtil;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * @author Snail
 */
@Slf4j
@RestController
@Api(description = "社交账号接口")
@RequestMapping("/snail/relate")
@Transactional
public class SocialController {

    @Autowired
    private SocialService socialService;

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/getRelatedInfo/{username}", method = RequestMethod.GET)
    @ApiOperation(value = "获取绑定账号信息")
    public Result<RelateUserInfo> getRelateUserInfo(@PathVariable String username) {

        RelateUserInfo r = new RelateUserInfo();
        List<Social> all = socialService.findByRelateUsername(username);
        all.forEach(e -> {
            if (CommonConstant.SOCIAL_TYPE_GITHUB.equals(e.getPlatform())) {
                r.setGithubId(e.getId()).setGithubUsername(e.getUsername()).setGithub(true);
            }
            if (CommonConstant.SOCIAL_TYPE_WECHAT.equals(e.getPlatform())) {
                r.setWechatId(e.getId()).setWechatUsername(e.getUsername()).setWechat(true);
            }
            if (CommonConstant.SOCIAL_TYPE_QQ.equals(e.getPlatform())) {
                r.setQqId(e.getId()).setQqUsername(e.getUsername()).setQq(true);
            }
            if (CommonConstant.SOCIAL_TYPE_WEIBO.equals(e.getPlatform())) {
                r.setWechatId(e.getId()).setWeiboUsername(e.getUsername()).setWeibo(true);
            }
            if (CommonConstant.SOCIAL_TYPE_DINGDING.equals(e.getPlatform())) {
                r.setDingdingId(e.getId()).setDingdingUsername(e.getUsername()).setDingding(true);
            }
            if (CommonConstant.SOCIAL_TYPE_WORKWECHAT.equals(e.getPlatform())) {
                r.setWorkwechatId(e.getId()).setWorkwechatUsername(e.getUsername()).setWorkwechat(true);
            }
        });
        return new ResultUtil<RelateUserInfo>().setData(r);
    }

    @RequestMapping(value = "/delByIds", method = RequestMethod.POST)
    @ApiOperation(value = "解绑")
    public Result<Object> delByIds(@RequestParam String[] ids) {

        for (String id : ids) {
            socialService.delete(id);
        }
        return ResultUtil.success("解绑成功");
    }

    @RequestMapping(value = "/findByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Object> delByIds(Social social,
                                   SearchVo searchVo,
                                   PageVo pv) {

        Page<Social> socialPage = socialService.findByCondition(social, searchVo, PageUtil.initPage(pv));
        socialPage.getContent().forEach(e -> {
            if (StrUtil.isNotBlank(e.getRelateUsername())) {
                e.setIsRelated(true);
                User u = userService.findByUsername(e.getRelateUsername());
                if (u != null) {
                    e.setNickname(u.getNickname());
                }
            }
        });
        return ResultUtil.data(socialPage);
    }
}
