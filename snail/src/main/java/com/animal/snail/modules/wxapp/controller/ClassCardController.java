package com.animal.snail.modules.wxapp.controller;

import com.animal.snail.base.SnailBaseController;
import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.wxapp.entity.ClassCard;
import com.animal.snail.modules.wxapp.service.ClassCardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * @author Snail
 */
@Slf4j
@RestController
@Api(description = "课程表管理接口")
@RequestMapping("/snail/wxapp/classcard")
@Transactional
public class ClassCardController extends SnailBaseController<ClassCard, String> {

    @Autowired
    private ClassCardService classCardService;

    @Override
    public ClassCardService getService() {
        return classCardService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<ClassCard>> getByCondition(ClassCard classCard, SearchVo searchVo, PageVo pageVo) {

        Page<ClassCard> page = classCardService.findByCondition(classCard, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<ClassCard>>().setData(page);
    }

    @RequestMapping(value = "/getOneWeek", method = RequestMethod.GET)
    @ResponseBody
    @ApiOperation(value = "获取最近一周开课数据")
    public Result<List<ClassCard>> getOneWeek() {
        List<ClassCard> list = getService().getOneWeek();
        return new ResultUtil<List<ClassCard>>().setData(list);
    }

}
