package com.animal.snail.modules.activiti.vo;

import lombok.Data;

import java.io.Serializable;

/**
 * @author Snail
 */
@Data
public class EmailMessage implements Serializable {

    private String username;

    private String content;

    private String fullUrl;
}
