package com.backend.miamapp.Controller.auth;

import com.backend.miamapp.Entity.AppUser;
import com.backend.miamapp.Service.auth.AuthService;
import com.backend.miamapp.Service.security.JwtService;
import com.backend.miamapp.dto.auth.CreateAcountDTO;
import com.backend.miamapp.dto.auth.LoginDTO;
import com.backend.miamapp.dto.auth.LoginResponseDTO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Auth")
public class AuthController {
    @Autowired
    AuthService service;
    @Autowired
    JwtService jwtService;

    @PostMapping("/AddAcount")
    public ResponseEntity<AppUser> createAcount(@Valid @RequestBody CreateAcountDTO createAcountDTO){
        return ResponseEntity.ok(service.createAcount(createAcountDTO));

    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> authenticate(@RequestBody LoginDTO loginUserDto) {
        AppUser authenticatedUser = service.authenticate(loginUserDto);

        String jwtToken = jwtService.generateToken(authenticatedUser);
        LoginResponseDTO loginResponseDTO = new LoginResponseDTO(jwtToken,jwtService.getExpirationTime());


        return ResponseEntity.ok(loginResponseDTO);
    }
}
