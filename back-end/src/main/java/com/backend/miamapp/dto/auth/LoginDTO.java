package com.backend.miamapp.dto.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class LoginDTO {
    @NotBlank(message = "L'email SVP")
    private String email;
    @NotBlank(message = "Le Mot de pass SVP")
    private String password;
}
