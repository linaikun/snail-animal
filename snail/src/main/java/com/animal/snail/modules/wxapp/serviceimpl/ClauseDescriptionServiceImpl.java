package com.animal.snail.modules.wxapp.serviceimpl;

import com.animal.snail.modules.wxapp.dao.ClauseDescriptionDao;
import com.animal.snail.modules.wxapp.entity.ClauseDescription;
import com.animal.snail.modules.wxapp.service.ClauseDescriptionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.animal.snail.common.vo.SearchVo;
import cn.hutool.core.date.DateUtil;
import cn.hutool.core.util.StrUtil;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.lang.Nullable;

import java.util.List;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.Date;

/**
 * 通用及条款说明接口实现
 * @author Snail
 */
@Slf4j
@Service
@Transactional
public class ClauseDescriptionServiceImpl implements ClauseDescriptionService {

    @Autowired
    private ClauseDescriptionDao clauseDescriptionDao;

    @Override
    public ClauseDescriptionDao getRepository() {
        return clauseDescriptionDao;
    }

    @Override
    public Page<ClauseDescription> findByCondition(ClauseDescription clauseDescription, SearchVo searchVo, Pageable pageable) {

        return clauseDescriptionDao.findAll(new Specification<ClauseDescription>() {
            @Nullable
            @Override
            public Predicate toPredicate(Root<ClauseDescription> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {

                // TODO 可添加你的其他搜索过滤条件 默认已有创建时间过滤
                Path<Date> createTimeField = root.get("createTime");

                List<Predicate> list = new ArrayList<>();

                // 创建时间
                if(StrUtil.isNotBlank(searchVo.getStartDate())&&StrUtil.isNotBlank(searchVo.getEndDate())){
                    Date start = DateUtil.parse(searchVo.getStartDate());
                    Date end = DateUtil.parse(searchVo.getEndDate());
                    list.add(cb.between(createTimeField, start, DateUtil.endOfDay(end)));
                }

                Predicate[] arr = new Predicate[list.size()];
                cq.where(list.toArray(arr));
                return null;
            }
        }, pageable);
    }

}