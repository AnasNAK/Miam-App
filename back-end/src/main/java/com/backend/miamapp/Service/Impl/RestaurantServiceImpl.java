package com.backend.miamapp.Service.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import com.backend.miamapp.Repository.RestaurantRepository;
import com.backend.miamapp.DTO.Restaurant.CreateRestaurantDTO;
import com.backend.miamapp.DTO.Restaurant.ResponseRestaurantDTO;
import org.springframework.stereotype.Service;
import com.backend.miamapp.Service.RestaurantService;
import com.backend.miamapp.Mapper.RestaurantMapper;
import com.backend.miamapp.Entity.Restaurant;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;


@Service
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private RestaurantMapper restaurantMapper;

    @Override
    public ResponseRestaurantDTO createRestaurant(CreateRestaurantDTO createRestaurantDTO) {
        Restaurant entity = restaurantMapper.toEntity(createRestaurantDTO);
        Restaurant restaurant = restaurantRepository.save(entity);
        return restaurantMapper.toResponse(restaurant);
    }

    @Override
    public Page<ResponseRestaurantDTO> getAllRestaurants(Pageable pageable) {
        Page<Restaurant> restaurants = restaurantRepository.findAll(pageable);
        if (restaurants.isEmpty()){
            throw new RuntimeException("The are no restaurants yet");
        }
        return restaurants.map(restaurantMapper::toResponse);
    }

    @Override
    public ResponseRestaurantDTO getRestaurantById(Long id) {
        if(restaurantRepository.existsById(id)){
            Restaurant restaurant = restaurantRepository.findById(id).get();
            return restaurantMapper.toResponse(restaurant);
        }else{
            throw new EntityNotFoundException("This Restaurant with the id " + id + " doesn not exist");
        }
    }


    @Override
    public boolean deleteRestaurant(Long id) {
        Optional<Restaurant> restaurant = restaurantRepository.findById(id);
        if (restaurant.isPresent()){
            restaurantRepository.deleteById(id);
            return true;
        }
        else {
            throw new EntityNotFoundException("Restaurant not found");
        }
    }

     @Override
    public ResponseRestaurantDTO updateRestaurant(CreateRestaurantDTO createRestaurantDTO , Long id) {
        return null;
    }
}