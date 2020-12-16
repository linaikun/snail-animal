package com.animal.snail.modules.wxapp.serviceimpl;

import com.animal.snail.modules.wxapp.dao.CurriculumDao;
import com.animal.snail.modules.wxapp.entity.Curriculum;
import com.animal.snail.modules.wxapp.service.CurriculumService;
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
 * 课程体系接口实现
 * @author Snail
 */
@Slf4j
@Service
@Transactional
public class CurriculumServiceImpl implements CurriculumService {

    @Autowired
    private CurriculumDao curriculumDao;

    @Override
    public CurriculumDao getRepository() {
        return curriculumDao;
    }

    @Override
    public Page<Curriculum> findByCondition(Curriculum curriculum, SearchVo searchVo, Pageable pageable) {

        return curriculumDao.findAll(new Specification<Curriculum>() {
            @Nullable
            @Override
            public Predicate toPredicate(Root<Curriculum> root, CriteriaQuery<?> cq, CriteriaBuilder cb) {

                // TODO 可添加你的其他搜索过滤条件 默认已有创建时间过滤
                Path<Date> createTimeField = root.get("createTime");
                Path<String> cur_name = root.get("cur_name");

                List<Predicate> list = new ArrayList<>();

                // 模糊搜素
                if (StrUtil.isNotBlank(curriculum.getCur_name())) {
                    list.add(cb.like(cur_name, '%' + curriculum.getCur_name() + '%'));
                }

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