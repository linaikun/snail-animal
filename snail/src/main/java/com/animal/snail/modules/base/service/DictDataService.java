package com.animal.snail.modules.base.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.base.entity.DictData;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * 字典数据接口
 * @author Exrick
 */
public interface DictDataService extends SnailBaseService<DictData, String> {

    /**
     * 多条件获取
     * @param dictData
     * @param pageable
     * @return
     */
    Page<DictData> findByCondition(DictData dictData, Pageable pageable);

    /**
     * 通过dictId获取启用字典 已排序
     * @param dictId
     * @return
     */
    List<DictData> findByDictId(String dictId);

    /**
     * 通过dictId删除
     * @param dictId
     */
    void deleteByDictId(String dictId);
}