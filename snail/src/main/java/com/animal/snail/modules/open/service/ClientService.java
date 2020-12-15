package com.animal.snail.modules.open.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.open.entity.Client;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * 客户端接口
 * @author Exrick
 */
public interface ClientService extends SnailBaseService<Client, String> {

    /**
     * 多条件分页获取
     * @param client
     * @param searchVo
     * @param pageable
     * @return
     */
    Page<Client> findByCondition(Client client, SearchVo searchVo, Pageable pageable);

}