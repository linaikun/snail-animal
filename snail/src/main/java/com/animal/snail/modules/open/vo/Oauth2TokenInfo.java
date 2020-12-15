package com.animal.snail.modules.open.vo;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;

@Data
@AllArgsConstructor
public class Oauth2TokenInfo implements Serializable {

    private String clientId;

    private String username;
}
