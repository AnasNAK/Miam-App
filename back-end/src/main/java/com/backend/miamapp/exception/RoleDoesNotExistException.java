package com.backend.miamapp.exception;

public class RoleDoesNotExistException extends RuntimeException {
    public RoleDoesNotExistException(String role) {
        super("Le Role : " + role  + "  N'existe pas (ADMIN/SUPER_ADMIN)");
    }
}
