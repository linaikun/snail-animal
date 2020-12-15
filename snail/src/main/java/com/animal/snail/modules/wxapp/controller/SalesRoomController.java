package com.animal.snail.modules.wxapp.controller;

import com.animal.snail.base.SnailBaseController;
import com.animal.snail.common.utils.PageUtil;
import com.animal.snail.common.utils.ResultUtil;
import com.animal.snail.common.vo.PageVo;
import com.animal.snail.common.vo.Result;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.wxapp.entity.SalesRoom;
import com.animal.snail.modules.wxapp.service.SalesRoomService;
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
@Api(description = "门店管理管理接口")
@RequestMapping("/snail/wxapp/salesroom")
@Transactional
public class SalesRoomController extends SnailBaseController<SalesRoom, String> {

    @Autowired
    private SalesRoomService salesRoomService;

    @Override
    public SalesRoomService getService() {
        return salesRoomService;
    }


    @RequestMapping(value = "/getByCondition", method = RequestMethod.GET)
    @ApiOperation(value = "多条件分页获取")
    public Result<Page<SalesRoom>> getByCondition(SalesRoom salesRoom, SearchVo searchVo, PageVo pageVo) {

        Page<SalesRoom> page = salesRoomService.findByCondition(salesRoom, searchVo, PageUtil.initPage(pageVo));
        return new ResultUtil<Page<SalesRoom>>().setData(page);
    }

}
