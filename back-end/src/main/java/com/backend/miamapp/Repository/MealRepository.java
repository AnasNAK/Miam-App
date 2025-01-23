package com.backend.miamapp.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.backend.miamapp.Entity.Meal;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MealRepository extends JpaRepository<Meal,Long> {

    @Query("SELECT m FROM Meal m " +
            "JOIN m.orderMeals om " +
            "GROUP BY m " +
            "ORDER BY COUNT(om) DESC LIMIT 3")
    List<Meal> findTop3MostOrderedMeals();
}
