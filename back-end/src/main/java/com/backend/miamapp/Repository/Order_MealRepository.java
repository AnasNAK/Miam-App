package com.backend.miamapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.miamapp.Entity.Order_Meal;
import org.springframework.stereotype.Repository;

@Repository
public interface Order_MealRepository extends JpaRepository<Order_Meal,Long> {
}
