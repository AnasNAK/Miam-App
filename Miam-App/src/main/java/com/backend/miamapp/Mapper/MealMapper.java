package com.backend.miamapp.Mapper;

import com.backend.miamapp.DTO.Meal.CreateMealDTO;
import com.backend.miamapp.DTO.Meal.ResponseMealDTO;
import com.backend.miamapp.Entity.Meal;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MealMapper {

    Meal toEntity(CreateMealDTO createMealDto);
    ResponseMealDTO toResponse(Meal meal);
}