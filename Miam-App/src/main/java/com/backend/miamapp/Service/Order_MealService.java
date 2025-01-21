package com.backend.miamapp.Service;
import com.backend.miamapp.DTO.Order_Meal.CreateOrder_MealDTO;
import com.backend.miamapp.DTO.Order_Meal.ResponseOrder_MealDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
public interface  Order_MealService {

    ResponseOrder_MealDTO createOrder_Meal(CreateOrder_MealDTO createOrder_MealDTO);
    Page<ResponseOrder_MealDTO> getAllOrder_Meals(Pageable pageable);
    ResponseOrder_MealDTO getOrder_MealById(Long id);
    ResponseOrder_MealDTO updateOrder_Meal(CreateOrder_MealDTO createOrder_MealDTO , Long id);
    boolean deleteOrder_Meal(Long id);

}