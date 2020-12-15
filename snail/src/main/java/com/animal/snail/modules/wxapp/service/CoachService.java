package com.animal.snail.modules.wxapp.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.wxapp.entity.Coach;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.animal.snail.common.vo.SearchVo;

import java.util.List;

/**
 * 教练/老师管理接口
 * @author Snail
 */
public interface CoachService extends SnailBaseService<Coach, String> {

    /**
    * 多条件分页获取
    * @param coach
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<Coach> findByCondition(Coach coach, SearchVo searchVo, Pageable pageable);

}