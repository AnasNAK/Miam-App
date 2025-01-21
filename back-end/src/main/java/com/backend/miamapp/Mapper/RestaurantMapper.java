package com.backend.miamapp.Mapper;

import com.backend.miamapp.DTO.Restaurant.CreateRestaurantDTO;
import com.backend.miamapp.DTO.Restaurant.ResponseRestaurantDTO;
import com.backend.miamapp.Entity.Restaurant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {

    Restaurant toEntity(CreateRestaurantDTO createRestaurantDto);
    ResponseRestaurantDTO toResponse(Restaurant restaurant);
}