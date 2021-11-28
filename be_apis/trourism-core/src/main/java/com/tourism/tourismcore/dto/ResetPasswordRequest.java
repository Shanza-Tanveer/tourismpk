package com.tourism.tourismcore.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResetPasswordRequest {

    private String newPassword;
    private Integer userId;
}
