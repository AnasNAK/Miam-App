package com.miam.miamappbackend.Service;
import com.miam.miamappbackend.DTO.Restaurant.CreateRestaurantDTO;
import com.miam.miamappbackend.DTO.Restaurant.ResponseRestaurantDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
public interface  RestaurantService {

    ResponseRestaurantDTO createRestaurant(CreateRestaurantDTO createRestaurantDTO);
    Page<ResponseRestaurantDTO> getAllRestaurants(Pageable pageable);
    ResponseRestaurantDTO getRestaurantById(Long id);
    ResponseRestaurantDTO updateUser(CreateRestaurantDTO createRestaurantDTO , Long id);
    boolean deleteRestaurant(Long id);

}