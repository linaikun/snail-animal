package com.animal.snail.modules.base.service;


import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.base.entity.User;
import com.animal.snail.modules.base.entity.UserRole;

import java.util.List;

/**
 * 用户角色接口
 * @author Snail
 */
public interface UserRoleService extends SnailBaseService<UserRole, String> {

    /**
     * 通过roleId查找
     * @param roleId
     * @return
     */
    List<UserRole> findByRoleId(String roleId);

    /**
     * 通过roleId查找用户
     * @param roleId
     * @return
     */
    List<User> findUserByRoleId(String roleId);

    /**
     * 删除用户角色
     * @param userId
     */
    void deleteByUserId(String userId);
}
