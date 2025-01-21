package com.miam.miamappbackend.Mapper;

import com.miam.miamappbackend.DTO.Meals.CreateMealsDTO;
import com.miam.miamappbackend.DTO.Meals.ResponseMealsDTO;
import com.miam.miamappbackend.Entity.Meals;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface MealsMapper {

    Meals toEntity(CreateMealsDTO createMealsDto);
    ResponseMealsDTO toResponse(Meals meals);
}