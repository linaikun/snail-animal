package com.animal.snail.modules.base.dao;

import com.animal.snail.base.SnailBaseDao;
import com.animal.snail.modules.base.entity.Role;

import java.util.List;

/**
 * 角色数据处理层
 * @author Snail
 */
public interface RoleDao extends SnailBaseDao<Role, String> {

    /**
     * 获取默认角色
     * @param defaultRole
     * @return
     */
    List<Role> findByDefaultRole(Boolean defaultRole);
}
