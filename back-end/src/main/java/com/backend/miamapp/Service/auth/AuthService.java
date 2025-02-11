package com.backend.miamapp.Service.auth;

import com.backend.miamapp.Entity.Admin;
import com.backend.miamapp.Entity.AppUser;
import com.backend.miamapp.Repository.AdminRepository;
import com.backend.miamapp.Repository.UserRepository;
import com.backend.miamapp.Service.security.JwtService;
import com.backend.miamapp.dto.auth.CreateAcountDTO;
import com.backend.miamapp.dto.auth.LoginDTO;
import com.backend.miamapp.dto.auth.LoginResponseDTO;
import com.backend.miamapp.exception.RoleDoesNotExistException;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.AuthenticationManager;


@Service
@AllArgsConstructor
public class AuthService {
    private final UserRepository repository;
    private final AdminRepository adminRepository;
    private final AuthenticationManager authenticationManager;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;

    public AppUser createAcount(CreateAcountDTO createAcountDTO){
        switch (createAcountDTO.getRole().toUpperCase()){
            case "ADMIN":
                Admin admin = new Admin();
                admin.setUsername(createAcountDTO.getUsername());
                admin.setEmail(createAcountDTO.getEmail());
                admin.setPassword(passwordEncoder.encode(createAcountDTO.getPassword()));
                return adminRepository.save(admin);

            default:
                throw new RoleDoesNotExistException(createAcountDTO.getRole());
        }




    }


    public LoginResponseDTO authenticate(LoginDTO loginDTO){
        System.out.println("heyy" + loginDTO.getEmail() + loginDTO.getPassword()) ;
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDTO.getEmail(),
                        loginDTO.getPassword()
                )
        );


        AppUser user =  repository.findByEmail(loginDTO.getEmail())
                .orElseThrow();

        String jwtToken = jwtService.generateToken(user);

        System.out.println(user.getAuthorities());
       return new LoginResponseDTO(jwtToken,jwtService.getExpirationTime());

    }
}
