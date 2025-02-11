package com.backend.miamapp.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class LoginResponseDTO {
    private Long id ;
    private String token;
    private String role;
    private long expiresIn;
}
