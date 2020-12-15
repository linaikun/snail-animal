package com.animal.snail.modules.activiti.dao;

import com.animal.snail.base.SnailBaseDao;
import com.animal.snail.modules.activiti.entity.ActBusiness;

import java.util.List;

/**
 * 申请业务数据处理层
 * @author Exrick
 */
public interface ActBusinessDao extends SnailBaseDao<ActBusiness, String> {

    /**
     * 通过流程定义id获取
     * @param procDefId
     * @return
     */
    List<ActBusiness> findByProcDefId(String procDefId);
}