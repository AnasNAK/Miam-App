package com.miam.miamappbackend.Mapper;

import com.miam.miamappbackend.DTO.Restaurant.CreateRestaurantDTO;
import com.miam.miamappbackend.DTO.Restaurant.ResponseRestaurantDTO;
import com.miam.miamappbackend.Entity.Restaurant;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface RestaurantMapper {

    Restaurant toEntity(CreateRestaurantDTO createRestaurantDto);
    ResponseRestaurantDTO toResponse(Restaurant restaurant);
}