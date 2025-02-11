package com.backend.miamapp.dto.auth;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class CreateAcountDTO {
    @NotBlank(message = "Le nom et prenom SVP")
    private String username;
    @NotBlank(message = "L'email SVP")
    private String email;
    @NotBlank(message = "Le Mot de pass SVP")
    private String password;
    @NotBlank(message = "le role SVP !")
    private String role;
}
