package com.animal.snail.modules.social.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.social.entity.Social;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Github登录接口
 * @author Exrick
 */
public interface SocialService extends SnailBaseService<Social, String> {

    /**
     * 通过openId和平台获取
     * @param openId
     * @param platform
     * @return
     */
    Social findByOpenIdAndPlatform(String openId, Integer platform);

    /**
     * 通过userId和平台获取
     * @param relateUsername
     * @param platform
     * @return
     */
    Social findByRelateUsernameAndPlatform(String relateUsername, Integer platform);

    /**
     * 通过relateUsername获取
     * @param relateUsername
     * @return
     */
    List<Social> findByRelateUsername(String relateUsername);

    /**
     * 分页多条件获取
     * @param social
     * @param searchVo
     * @param pageable
     * @return
     */
    Page<Social> findByCondition(Social social, SearchVo searchVo, Pageable pageable);
}