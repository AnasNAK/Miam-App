package com.backend.miamapp.Service;
import com.backend.miamapp.DTO.Restaurant.CreateRestaurantDTO;
import com.backend.miamapp.DTO.Restaurant.ResponseRestaurantDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
public interface  RestaurantService {

    ResponseRestaurantDTO createRestaurant(CreateRestaurantDTO createRestaurantDTO);
    Page<ResponseRestaurantDTO> getAllRestaurants(Pageable pageable);
    ResponseRestaurantDTO getRestaurantById(Long id);
    ResponseRestaurantDTO updateRestaurant(CreateRestaurantDTO createRestaurantDTO , Long id);
    boolean deleteRestaurant(Long id);

}