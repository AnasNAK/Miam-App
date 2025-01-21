package com.miam.miamappbackend.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.miam.miamappbackend.Entity.Meals;
import org.springframework.stereotype.Repository;

@Repository
public interface MealsRepository extends JpaRepository<Meals,Long> {
}
