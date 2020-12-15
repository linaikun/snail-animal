package com.animal.snail.modules.wxapp.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.wxapp.entity.BasicSetup;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.animal.snail.common.vo.SearchVo;

import java.util.List;

/**
 * 公司基本说明接口
 * @author Snail
 */
public interface BasicSetupService extends SnailBaseService<BasicSetup, String> {

    /**
    * 多条件分页获取
    * @param basicSetup
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<BasicSetup> findByCondition(BasicSetup basicSetup, SearchVo searchVo, Pageable pageable);

}