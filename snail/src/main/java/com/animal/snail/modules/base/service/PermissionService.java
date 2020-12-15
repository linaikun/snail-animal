package com.animal.snail.modules.base.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.base.entity.Permission;

import java.util.List;

/**
 * 权限接口
 * @author Exrick
 */
public interface PermissionService extends SnailBaseService<Permission, String> {

    /**
     * 通过parendId查找
     * @param parentId
     * @return
     */
    List<Permission> findByParentIdOrderBySortOrder(String parentId);

    /**
     * 通过类型和状态获取
     * @param type
     * @param status
     * @return
     */
    List<Permission> findByTypeAndStatusOrderBySortOrder(Integer type, Integer status);

    /**
     * 通过名称获取
     * @param title
     * @return
     */
    List<Permission> findByTitle(String title);

    /**
     * 模糊搜索
     * @param title
     * @return
     */
    List<Permission> findByTitleLikeOrderBySortOrder(String title);
}