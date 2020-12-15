package com.animal.snail.common.exception;

import lombok.Data;

/**
 * @author Snail
 */
@Data
public class CaptchaException extends RuntimeException {

    private String msg;

    public CaptchaException(String msg) {
        super(msg);
        this.msg = msg;
    }
}
