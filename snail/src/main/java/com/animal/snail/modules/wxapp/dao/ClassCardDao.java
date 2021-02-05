 package com.animal.snail.modules.wxapp.dao;

import com.animal.snail.base.SnailBaseDao;
import com.animal.snail.modules.wxapp.entity.ClassCard;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import java.sql.Date;
import java.util.Calendar;
import java.util.List;

/**
 * 课程表数据处理层
 * @author Snail
 */
public interface ClassCardDao extends SnailBaseDao<ClassCard, String> {
    /**
     * 查询最近一周内容-to
     * @param userId
     */
    @Modifying
    @Query("select d from ClassCard d where d.start_time >= ?1")
    List<ClassCard> getOneWeek(Date c);

}