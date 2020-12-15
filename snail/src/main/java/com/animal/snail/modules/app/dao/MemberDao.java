package com.animal.snail.modules.app.dao;

import com.animal.snail.base.SnailBaseDao;
import com.animal.snail.modules.app.entity.Member;

/**
 * 会员数据处理层
 * @author Exrick
 */
public interface MemberDao extends SnailBaseDao<Member, String> {

    /**
     * 通过用户名获取用户
     * @param username
     * @return
     */
    Member findByUsername(String username);

    /**
     * 通过手机获取用户
     * @param mobile
     * @return
     */
    Member findByMobile(String mobile);
}