package com.animal.snail.modules.activiti.dao;

import com.animal.snail.base.SnailBaseDao;
import com.animal.snail.modules.activiti.entity.ActStarter;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

/**
 * 流程可发起人数据处理层
 * @author Exrick
 */
public interface ActStarterDao extends SnailBaseDao<ActStarter, String> {

    /**
     * 通过用户id获取
     * @param userId
     * @return
     */
    List<ActStarter> findByUserId(String userId);

    /**
     * 通过流程定义和用户id获取
     * @param processDefId
     * @param userId
     * @return
     */
    List<ActStarter> findByProcessDefIdAndUserId(String processDefId, String userId);

    /**
     * 通过流程定义id删除
     * @param processDefId
     */
    @Modifying
    @Query("delete from ActStarter a where a.processDefId = ?1")
    void deleteByProcessDefId(String processDefId);
}