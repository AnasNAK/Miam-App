package com.backend.miamapp.Repository;

import com.backend.miamapp.Entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin,Long> {
}
