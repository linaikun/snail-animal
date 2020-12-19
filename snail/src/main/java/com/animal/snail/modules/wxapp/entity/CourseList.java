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
@Table(name = "w_course_list")
@TableName("w_course_list")
@ApiModel(value = "课程列表")
public class CourseList extends SnailBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "课程名")
    private String courseName;

    @ApiModelProperty(value = "难易度")
    private String facilityValue;

    @ApiModelProperty(value = "卡路里消耗")
    private Integer calorieCon;

    @ApiModelProperty(value = "卡路里消耗提示")
    private String calorieTip;

    @ApiModelProperty(value = "柔韧性")
    private Integer flexibility;

    @ApiModelProperty(value = "心肺功能")
    private Integer heartNum;

    @ApiModelProperty(value = "协调性")
    private Integer coordination;

    @ApiModelProperty(value = "肌肉耐力")
    private Integer muscleEndurance;

    @ApiModelProperty(value = "肌肉力量")
    private Integer muscleStrength;

    @ApiModelProperty(value = "课程体系")
    private String curriculum;

    @ApiModelProperty(value = "是否推荐到首页")
    private String recommend;

    @ApiModelProperty(value = "课程描述")
    private String courseDes;

    @ApiModelProperty(value = "注意事项")
    private String matters;

    @ApiModelProperty(value = "自带物品")
    private String belongings;

    @ApiModelProperty(value = "示意图片")
    private String coursePic;

    @ApiModelProperty(value = "详情")
    private String details;

    @ApiModelProperty(value = "备用字段1")
    private String string1;

}