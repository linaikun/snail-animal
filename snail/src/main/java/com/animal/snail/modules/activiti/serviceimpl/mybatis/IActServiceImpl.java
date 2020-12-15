package com.animal.snail.modules.activiti.serviceimpl.mybatis;

import com.animal.snail.common.exception.SnailException;
import com.animal.snail.modules.activiti.dao.mapper.ActMapper;
import com.animal.snail.modules.activiti.service.mybatis.IActService;
import cn.hutool.core.util.StrUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * @author Snail
 */
@Service
public class IActServiceImpl implements IActService {

    @Autowired
    private ActMapper actMapper;

    @Override
    public Integer deleteBusiness(String table, String id) {

        if (StrUtil.isBlank(table) || StrUtil.isBlank(id)) {
            throw new SnailException("关联业务表名或id为空");
        }
        return actMapper.deleteBusiness(table, id);
    }
}
