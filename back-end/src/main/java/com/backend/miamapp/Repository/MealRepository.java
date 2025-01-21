package com.backend.miamapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.miamapp.Entity.Meal;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal,Long> {

    @Query("SELECT m FROM Meal m " +
            "JOIN m.orders co " +
            "JOIN co.meals om " +
            "GROUP BY m " +
            "ORDER BY COUNT(om) DESC")
    List<Meal> findTop3MostOrderedMeals();
}
