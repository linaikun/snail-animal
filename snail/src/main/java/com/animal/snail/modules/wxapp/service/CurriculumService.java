package com.animal.snail.modules.wxapp.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.wxapp.entity.Curriculum;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.animal.snail.common.vo.SearchVo;

import java.util.List;

/**
 * 课程体系接口
 * @author Snail
 */
public interface CurriculumService extends SnailBaseService<Curriculum, String> {

    /**
    * 多条件分页获取
    * @param curriculum
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<Curriculum> findByCondition(Curriculum curriculum, SearchVo searchVo, Pageable pageable);

}