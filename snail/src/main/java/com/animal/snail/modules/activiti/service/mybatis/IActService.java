package com.animal.snail.modules.activiti.service.mybatis;

/**
 * @author Snail
 */
public interface IActService {

    /**
     * 删除关联业务表
     * @param table
     * @param id
     * @return
     */
    Integer deleteBusiness(String table, String id);
}
