package com.animal.snail.modules.activiti.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.activiti.entity.ActStarter;

import java.util.Set;

/**
 * 流程可发起人接口
 * @author Exrick
 */
public interface ActStarterService extends SnailBaseService<ActStarter, String> {

    /**
     * 通过用户id获取其可发起流程id
     * @param userId
     * @return
     */
    Set<String> findByUserId(String userId);

    /**
     * 判断用户有无该流程权限
     * @param processDefId
     * @param userId
     * @return
     */
    Boolean hasRecord(String processDefId, String userId);

    /**
     * 通过流程定义id删除
     * @param processDefId
     */
    void deleteByProcessDefId(String processDefId);
}