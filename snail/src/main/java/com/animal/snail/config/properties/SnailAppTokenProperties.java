package com.animal.snail.config.properties;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

/**
 * @author Snail
 */
@Data
@Configuration
@ConfigurationProperties(prefix = "snail.app-token")
public class SnailAppTokenProperties {

    /**
     * 单平台登陆
     */
    private Boolean spl = true;

    /**
     * token过期时间（天）
     */
    private Integer tokenExpireTime = 30;
}
