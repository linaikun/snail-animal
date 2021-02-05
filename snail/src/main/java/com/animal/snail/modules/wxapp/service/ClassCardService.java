package com.animal.snail.modules.wxapp.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.wxapp.entity.ClassCard;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.animal.snail.common.vo.SearchVo;

import java.util.List;

/**
 * 课程表接口
 * @author Snail
 */
public interface ClassCardService extends SnailBaseService<ClassCard, String> {

    /**
    * 多条件分页获取
    * @param classCard
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<ClassCard> findByCondition(ClassCard classCard, SearchVo searchVo, Pageable pageable);

    /**
     * 获取最近一周
     * @return
     */
     List<ClassCard> getOneWeek();



}