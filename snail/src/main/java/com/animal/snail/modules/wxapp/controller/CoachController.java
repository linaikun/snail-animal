package com.animal.snail.modules.wxapp.controller;

import com.animal.snail.base.SnailBaseController;
import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.wxapp.entity.Coach;
import com.animal.snail.modules.wxapp.service.CoachService;
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
@Api(description = "教练/老师管理管理接口")
@RequestMapping("/snail/wxapp/coach")
@Transactional
public class CoachController extends SnailBaseController<Coach, String> {

    @Autowired
    private CoachService coachService;

    @Override
    public CoachService getService() {
        return coachService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<Coach>> getByCondition(Coach coach, SearchVo searchVo, PageVo pageVo) {

        Page<Coach> page = coachService.findByCondition(coach, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<Coach>>().setData(page);
    }

}
