package com.animal.snail.modules.activiti.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.activiti.entity.ActModel;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * 模型管理接口
 * @author Exrick
 */
public interface ActModelService extends SnailBaseService<ActModel, String> {

    /**
     * 多条件分页获取
     * @param actModel
     * @param pageable
     * @return
     */
    Page<ActModel> findByCondition(ActModel actModel, Pageable pageable);
}