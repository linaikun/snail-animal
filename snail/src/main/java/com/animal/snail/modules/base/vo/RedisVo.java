package com.animal.snail.modules.base.vo;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * @author Snail
 */
@Data
@AllArgsConstructor
public class RedisVo {

    private String key;

    private String value;

    private Long expireTime;
}
