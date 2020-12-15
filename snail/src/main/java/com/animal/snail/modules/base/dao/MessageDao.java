package com.animal.snail.modules.base.dao;

import com.animal.snail.base.SnailBaseDao;
import com.animal.snail.modules.base.entity.Message;

import java.util.List;

/**
 * 消息内容数据处理层
 * @author Exrick
 */
public interface MessageDao extends SnailBaseDao<Message, String> {

    /**
     * 通过创建发送标识获取
     * @param createSend
     * @return
     */
    List<Message> findByCreateSend(Boolean createSend);
}