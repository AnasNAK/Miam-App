package com.backend.miamapp.Service.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import com.backend.miamapp.Repository.Order_MealRepository;
import com.backend.miamapp.DTO.Order_Meal.CreateOrder_MealDTO;
import com.backend.miamapp.DTO.Order_Meal.ResponseOrder_MealDTO;
import org.springframework.stereotype.Service;
import com.backend.miamapp.Service.Order_MealService;
import com.backend.miamapp.Mapper.Order_MealMapper;
import com.backend.miamapp.Entity.Order_Meal;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;


@Service
public class Order_MealServiceImpl implements Order_MealService {

    @Autowired
    private Order_MealRepository order_mealRepository;

    @Autowired
    private Order_MealMapper order_mealMapper;

    @Override
    public ResponseOrder_MealDTO createOrder_Meal(CreateOrder_MealDTO createOrder_MealDTO) {
        Order_Meal entity = order_mealMapper.toEntity(createOrder_MealDTO);
        Order_Meal order_meal = order_mealRepository.save(entity);
        return order_mealMapper.toResponse(entity);
    }

    @Override
    public Page<ResponseOrder_MealDTO> getAllOrder_Meals(Pageable pageable) {
        Page<Order_Meal> order_meals = order_mealRepository.findAll(pageable);
        if (order_meals.isEmpty()){
            throw new RuntimeException("The are no order_meals yet");
        }
        return order_meals.map(order_mealMapper::toResponse);
    }

    @Override
    public ResponseOrder_MealDTO getOrder_MealById(Long id) {
        if(order_mealRepository.existsById(id)){
            Order_Meal order_meal = order_mealRepository.findById(id).get();
            return order_mealMapper.toResponse(order_meal);
        }else{
            throw new EntityNotFoundException("This Order_Meal with the id " + id + " doesn not exist");
        }
    }


    @Override
    public boolean deleteOrder_Meal(Long id) {
        Optional<Order_Meal> order_meal = order_mealRepository.findById(id);
        if (order_meal.isPresent()){
            order_mealRepository.deleteById(id);
            return true;
        }
        else {
            throw new EntityNotFoundException("Order_Meal not found");
        }
    }

     @Override
    public ResponseOrder_MealDTO updateOrder_Meal(CreateOrder_MealDTO createOrder_MealDTO , Long id) {
        return null;
    }
}