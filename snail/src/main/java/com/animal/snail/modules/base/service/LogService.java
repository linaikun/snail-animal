package com.animal.snail.modules.base.service;


import com.animal.snail.base.SnailBaseService;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.base.entity.Log;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * 日志接口
 * @author Snail
 */
public interface LogService extends SnailBaseService<Log, String> {

    /**
     * 分页搜索获取日志
     * @param type
     * @param key
     * @param searchVo
     * @param pageable
     * @return
     */
    Page<Log> findByConfition(Integer type, String key, SearchVo searchVo, Pageable pageable);

    /**
     * 删除所有
     */
    void deleteAll();
}
