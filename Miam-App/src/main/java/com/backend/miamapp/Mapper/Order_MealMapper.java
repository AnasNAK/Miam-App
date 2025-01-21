package com.backend.miamapp.Mapper;

import com.backend.miamapp.DTO.Order_Meal.CreateOrder_MealDTO;
import com.backend.miamapp.DTO.Order_Meal.ResponseOrder_MealDTO;
import com.backend.miamapp.Entity.Order_Meal;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface Order_MealMapper {

    Order_Meal toEntity(CreateOrder_MealDTO createOrder_MealDto);
    ResponseOrder_MealDTO toResponse(Order_Meal order_meal);
}