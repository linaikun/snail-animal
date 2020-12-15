package com.animal.snail.modules.wxapp.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.wxapp.entity.SalesRoom;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.animal.snail.common.vo.SearchVo;

import java.util.List;

/**
 * 门店管理接口
 * @author Snail
 */
public interface SalesRoomService extends SnailBaseService<SalesRoom, String> {

    /**
    * 多条件分页获取
    * @param salesRoom
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<SalesRoom> findByCondition(SalesRoom salesRoom, SearchVo searchVo, Pageable pageable);

}