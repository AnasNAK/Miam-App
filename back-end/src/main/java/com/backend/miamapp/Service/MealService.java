package com.backend.miamapp.Service;
import com.backend.miamapp.DTO.Meal.CreateMealDTO;
import com.backend.miamapp.DTO.Meal.ResponseMealDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
public interface  MealService {

    ResponseMealDTO createMeal(CreateMealDTO createMealDTO);
    Page<ResponseMealDTO> getAllMeals(Pageable pageable);
    ResponseMealDTO getMealById(Long id);
    ResponseMealDTO updateMeal(CreateMealDTO createMealDTO , Long id);
    boolean deleteMeal(Long id);

}