package com.animal.snail.modules.wxapp.controller;

import com.animal.snail.base.SnailBaseController;
import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.wxapp.entity.BasicSetup;
import com.animal.snail.modules.wxapp.service.BasicSetupService;
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
@Api(description = "公司基本说明管理接口")
@RequestMapping("/snail/wxapp/basicsetup")
@Transactional
public class BasicSetupController extends SnailBaseController<BasicSetup, String> {

    @Autowired
    private BasicSetupService basicSetupService;

    @Override
    public BasicSetupService getService() {
        return basicSetupService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<BasicSetup>> getByCondition(BasicSetup basicSetup, SearchVo searchVo, PageVo pageVo) {

        Page<BasicSetup> page = basicSetupService.findByCondition(basicSetup, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<BasicSetup>>().setData(page);
    }

}
