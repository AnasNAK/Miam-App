package com.backend.miamapp.Service;
import com.backend.miamapp.DTO.Meal.CreateMealDTO;
import com.backend.miamapp.DTO.Meal.ResponseMealDTO;

import com.backend.miamapp.DTO.Meal.UpdateQuantity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
public interface  MealService {

    ResponseMealDTO createMeal(CreateMealDTO createMealDTO);
    Page<ResponseMealDTO> getAllMeals(Pageable pageable);
    ResponseMealDTO getMealById(Long id);
    ResponseMealDTO updateMeal(CreateMealDTO createMealDTO , Long id);
    List<ResponseMealDTO> getTop3OrdredMeals();
    ResponseMealDTO updateQuantity(UpdateQuantity updateQuantity);
    boolean deleteMeal(Long id);

}