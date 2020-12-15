package com.animal.snail.common.vo;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class IpInfo implements Serializable {

    private String url;

    private String p;
}