package com.animal.snail.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @author Snail
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "snail.iplimit")
public class SnailIpLimitProperties {

    /**
     * 是否开启IP限流
     */
    private Boolean enable = false;

    /**
     * 限制请求个数
     */
    private Long limit = 100L;

    /**
     * 每单位时间内（毫秒）
     */
    private Long timeout = 1000L;
}
