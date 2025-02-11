package com.backend.miamapp.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@DiscriminatorColumn(name="ROLE ", discriminatorType = DiscriminatorType.STRING)
public abstract class AppUser implements UserDetails {
        @Id
        @GeneratedValue(strategy = GenerationType.AUTO)
        protected Long id;
    protected String username;
    protected String email;
    protected String password;



    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {

        String role = this.getClass().getAnnotation(DiscriminatorValue.class).value();
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_" + role));
    }
    @Override
    public String getUsername() {
        return email;
    }
}
