package com.backend.miamapp.Service.auth;

import com.backend.miamapp.Entity.AppUser;
import com.backend.miamapp.Repository.UserRepository;
import com.backend.miamapp.dto.auth.CreateAcountDTO;
import com.backend.miamapp.dto.auth.LoginDTO;
import lombok.AllArgsConstructor;
import org.apache.catalina.User;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.security.authentication.AuthenticationManager;


@Service
@AllArgsConstructor
public class AuthService {
    private UserRepository repository;
    private final AuthenticationManager authenticationManager;

    private PasswordEncoder passwordEncoder;

    public AppUser createAcount(CreateAcountDTO createAcountDTO){
        AppUser user = new AppUser();
        user.setUsername(createAcountDTO.getUsername());
        user.setEmail(createAcountDTO.getEmail());
        user.setPassword(passwordEncoder.encode(createAcountDTO.getPassword()));

        return repository.save(user);
    }


    public AppUser authenticate(LoginDTO loginDTO){
        System.out.println("heyy" + loginDTO.getEmail() + loginDTO.getPassword()) ;
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginDTO.getEmail(),
                        loginDTO.getPassword()
                )
        );


        return repository.findByEmail(loginDTO.getEmail())
                .orElseThrow();

    }
}
