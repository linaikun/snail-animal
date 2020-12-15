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
@Table(name = "w_basic_setup")
@TableName("w_basic_setup")
@ApiModel(value = "公司基本说明")
public class BasicSetup extends SnailBaseEntity {

    private static final long serialVersionUID = 1L;
    @ApiModelProperty(value = "公司地址")
    private String company_adress;
    @ApiModelProperty(value = "公司logo")
    private String company_logo;
    @ApiModelProperty(value = "公司名称")
    private String company_name;
    @ApiModelProperty(value = "公司电话")
    private String company_tel;
    @ApiModelProperty(value = "公司地址坐标X")
    private Double location_x;
    @ApiModelProperty(value = "公司地址坐标Y")
    private Double location_y;
    @ApiModelProperty(value = "微信名称")
    private String wx_name;
    @ApiModelProperty(value = "微信ID")
    private Integer wxunid;

}