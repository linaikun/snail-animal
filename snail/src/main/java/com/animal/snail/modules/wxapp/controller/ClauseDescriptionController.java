package com.animal.snail.modules.wxapp.controller;

import com.animal.snail.base.SnailBaseController;
import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.wxapp.entity.ClauseDescription;
import com.animal.snail.modules.wxapp.service.ClauseDescriptionService;
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
@Api(description = "通用及条款说明管理接口")
@RequestMapping("/snail/wxapp/clausedescription")
@Transactional
public class ClauseDescriptionController extends SnailBaseController<ClauseDescription, String> {

    @Autowired
    private ClauseDescriptionService clauseDescriptionService;

    @Override
    public ClauseDescriptionService getService() {
        return clauseDescriptionService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<ClauseDescription>> getByCondition(ClauseDescription clauseDescription, SearchVo searchVo, PageVo pageVo) {

        Page<ClauseDescription> page = clauseDescriptionService.findByCondition(clauseDescription, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<ClauseDescription>>().setData(page);
    }

}
