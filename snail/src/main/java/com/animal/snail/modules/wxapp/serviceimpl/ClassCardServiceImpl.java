package com.animal.snail.modules.wxapp.serviceimpl;

import com.animal.snail.modules.wxapp.dao.ClassCardDao;
import com.animal.snail.modules.wxapp.entity.ClassCard;
import com.animal.snail.modules.wxapp.service.ClassCardService;
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

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;
import javax.persistence.criteria.*;
import java.util.ArrayList;
import java.util.Date;

/**
 * 课程表接口实现
 * @author Snail
 */
@Slf4j
@Service
@Transactional
public class ClassCardServiceImpl implements ClassCardService {

    @Autowired
    private ClassCardDao classCardDao;

    @Override
    public ClassCardDao getRepository() {
        return classCardDao;
    }

    @Override
    public Page<ClassCard> findByCondition(ClassCard classCard, SearchVo searchVo, Pageable pageable) {

        return classCardDao.findAll(new Specification<ClassCard>() {
            @Nullable
            @Override
            public Predicate toPredicate(Root<ClassCard> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {

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

    public List<ClassCard> getOneWeek() {
        java.sql.Date s = new java.sql.Date(new Date().getTime());
        return classCardDao.getOneWeek(s);
    }



}