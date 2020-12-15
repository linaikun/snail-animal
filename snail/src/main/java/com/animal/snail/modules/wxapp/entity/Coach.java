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
@Table(name = "w_coach")
@TableName("w_coach")
@ApiModel(value = "教练/老师管理")
public class Coach extends SnailBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "昵称")
    private String name;

    @ApiModelProperty(value = "简短描述")
    private String brief_des;

    @ApiModelProperty(value = "专业资质")
    private String professional_qua;

    @ApiModelProperty(value = "说说")
    private String message;


    @ApiModelProperty(value = "头像")
    private String face_pic;

    @ApiModelProperty(value = "私教")
    private String personal_train;

    @ApiModelProperty(value = "私教微信")
    private String personal_wx;

    @ApiModelProperty(value = "私教电话")
    private String personal_tel;

    @ApiModelProperty(value = "私教价格")
    private String personal_price;

    @ApiModelProperty(value = "私教起售节数")
    private String personal_num;

    @ApiModelProperty(value = "私教擅长项目")
    private String personal_at;

    @ApiModelProperty(value = "详细介绍")
    private String detailed_intro;

    @ApiModelProperty(value = "备用字段1")
    private String string1;

}