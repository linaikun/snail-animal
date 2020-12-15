package com.animal.snail.common.exception;

import lombok.Data;

/**
 * @author Snail
 */
@Data
public class LimitException extends RuntimeException {

    private String msg;

    public LimitException(String msg) {
        super(msg);
        this.msg = msg;
    }
}
