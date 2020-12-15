package com.animal.snail.modules.file.service;

import com.animal.snail.base.SnailBaseService;
import com.animal.snail.common.vo.SearchVo;
import com.animal.snail.modules.file.entity.File;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

/**
 * 文件管理接口
 * @author Exrick
 */
public interface FileService extends SnailBaseService<File, String> {

    /**
     * 多条件获取列表
     * @param file
     * @param searchVo
     * @param pageable
     * @return
     */
    Page<File> findByCondition(File file, SearchVo searchVo, Pageable pageable);
}