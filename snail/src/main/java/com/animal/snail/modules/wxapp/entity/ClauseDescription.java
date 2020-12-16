package com.animal.snail.modules.wxapp.entity;

import com.animal.snail.base.SnailBaseEntity;
import com.baomidou.mybatisplus.annotation.TableName;
import io.swagger.annotations.ApiModelProperty;
import io.swagger.annotations.ApiModel;
import lombok.Data;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import javax.persistence.Entity;
import javax.persistence.Table;

/**
 * @author Snail
 */
@Data
@Entity
@DynamicInsert
@DynamicUpdate
@Table(name = "w_clause_description")
@TableName("w_clause_description")
@ApiModel(value = "通用及条款说明")
public class ClauseDescription extends SnailBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "服务条款")
    private String to_s;

    @ApiModelProperty(value = "公司介绍")
    private String company_des;

    @ApiModelProperty(value = "XX规则")
    private String xx_rule;

    @ApiModelProperty(value = "会员权益")
    private String  memb_interests;

    @ApiModelProperty(value = "备用字段1")
    private String  String1;

    @ApiModelProperty(value = "备用字段2")
    private String  String2;

    @ApiModelProperty(value = "备用字段3")
    private String  String3;

    @ApiModelProperty(value = "备用字段3")
    private String  String4;








}