package com.animal.snail.common.exception;

import lombok.Data;

/**
 * @author Snail
 */
@Data
public class SnailException extends RuntimeException {

    private String msg;

    public SnailException(String msg) {
        super(msg);
        this.msg = msg;
    }
}
