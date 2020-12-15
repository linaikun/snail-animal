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
@Table(name = "w_sales_room")
@TableName("w_sales_room")
@ApiModel(value = "门店管理")
public class SalesRoom extends SnailBaseEntity {

    private static final long serialVersionUID = 1L;

    @ApiModelProperty(value = "门店名")
    private String room_name;

    @ApiModelProperty(value = "门店地址")
    private String room_adress;

    @ApiModelProperty(value = "地铁站名")
    private String subway_name;

    @ApiModelProperty(value = "地铁步行距离")
    private String subway_dis;

    @ApiModelProperty(value = "地铁乘坐提示")
    private String subway_tip;

    @ApiModelProperty(value = "公交站名")
    private String bus_name;

    @ApiModelProperty(value = "公交步行距离")
    private String bus_dis;

    @ApiModelProperty(value = "公交乘坐提示")
    private String bus_tip;

    @ApiModelProperty(value = "自驾目的地")
    private String drive_pur;

    @ApiModelProperty(value = "自驾提示")
    private String drive_tip;

    @ApiModelProperty(value = "推荐到达方式")
    private String preferred_Methods;

    @ApiModelProperty(value = "展示图片")
    private String show_picture;

    @ApiModelProperty(value = "地理位置X")
    private Double location_x;

    @ApiModelProperty(value = "地理位置Y")
    private Double location_y;


}