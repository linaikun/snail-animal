package com.animal.snail.modules.wxapp.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.wxapp.entity.ClauseDescription;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.animal.snail.common.vo.SearchVo;

import java.util.List;

/**
 * 通用及条款说明接口
 * @author Snail
 */
public interface ClauseDescriptionService extends SnailBaseService<ClauseDescription, String> {

    /**
    * 多条件分页获取
    * @param clauseDescription
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<ClauseDescription> findByCondition(ClauseDescription clauseDescription, SearchVo searchVo, Pageable pageable);

}