package com.animal.snail.modules.wxapp.controller;

import com.animal.snail.base.SnailBaseController;
import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.wxapp.entity.CourseList;
import com.animal.snail.modules.wxapp.service.CourseListService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

/**
 * @author Snail
 */
@Slf4j
@RestController
@Api(description = "课程体系管理接口")
@RequestMapping("/snail/wxapp/courseList")
@Transactional
public class CourseListController extends SnailBaseController<CourseList, String> {

    @Autowired
    private CourseListService courseListService;

    @Override
    public CourseListService getService() {
        return courseListService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<CourseList>> getByCondition(CourseList courseList, SearchVo searchVo, PageVo pageVo) {

        Page<CourseList> page = courseListService.findByCondition(courseList, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<CourseList>>().setData(page);
    }

}
