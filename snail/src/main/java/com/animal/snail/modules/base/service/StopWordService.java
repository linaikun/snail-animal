package com.animal.snail.modules.base.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.modules.base.entity.StopWord;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import com.animal.snail.common.vo.SearchVo;

/**
 * 禁用词管理接口
 * @author Exrick
 */
public interface StopWordService extends SnailBaseService<StopWord, String> {

    /**
    * 多条件分页获取
    * @param stopWord
    * @param searchVo
    * @param pageable
    * @return
    */
    Page<StopWord> findByCondition(StopWord stopWord, SearchVo searchVo, Pageable pageable);

}