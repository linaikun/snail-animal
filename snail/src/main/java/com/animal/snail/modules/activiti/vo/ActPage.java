package com.animal.snail.modules.activiti.vo;

import lombok.Data;

import java.util.List;

/**
 * @author Snail
 */
@Data
public class ActPage<T> {

    List<T> content;

    Long totalElements;
}
