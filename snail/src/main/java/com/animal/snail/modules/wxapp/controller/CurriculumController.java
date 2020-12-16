package com.animal.snail.modules.wxapp.controller;

import com.animal.snail.base.SnailBaseController;
import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.wxapp.entity.Curriculum;
import com.animal.snail.modules.wxapp.service.CurriculumService;
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
@RequestMapping("/snail/wxapp/curriculum")
@Transactional
public class CurriculumController extends SnailBaseController<Curriculum, String> {

    @Autowired
    private CurriculumService curriculumService;

    @Override
    public CurriculumService getService() {
        return curriculumService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<Curriculum>> getByCondition(Curriculum curriculum, SearchVo searchVo, PageVo pageVo) {

        Page<Curriculum> page = curriculumService.findByCondition(curriculum, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<Curriculum>>().setData(page);
    }

}
