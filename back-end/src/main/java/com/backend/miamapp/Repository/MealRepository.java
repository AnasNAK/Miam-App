package com.backend.miamapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.miamapp.Entity.Meal;
import org.springframework.stereotype.Repository;

@Repository
public interface MealRepository extends JpaRepository<Meal,Long> {
}
