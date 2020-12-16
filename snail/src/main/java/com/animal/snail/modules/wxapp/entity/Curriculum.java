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
@Table(name = "w_curriculum")
@TableName("w_curriculum")
@ApiModel(value = "课程体系")
public class Curriculum extends SnailBaseEntity {

    private static final long serialVersionUID = 1L;
    @ApiModelProperty(value = "名称")
    private String cur_name;

    @ApiModelProperty(value = "简介")
    private String profile;

    @ApiModelProperty(value = "图片")
    private String cur_pic;

    @ApiModelProperty(value = "图标")
    private String cur_log;

    @ApiModelProperty(value = "内容")
    private String cur_content;

}