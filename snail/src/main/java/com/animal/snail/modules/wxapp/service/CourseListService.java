package com.animal.snail.modules.wxapp.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.wxapp.entity.CourseList;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.animal.snail.common.vo.SearchVo;

import java.util.List;

/**
 * 课程体系接口
 * @author Snail
 */
public interface CourseListService extends SnailBaseService<CourseList, String> {

    /**
    * 多条件分页获取
    * @param courseList
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<CourseList> findByCondition(CourseList courseList, SearchVo searchVo, Pageable pageable);

}