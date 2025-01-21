package com.backend.miamapp.Service.Impl;
import com.backend.miamapp.DTO.Meal.UpdateQuantity;
import com.backend.miamapp.Entity.Restaurant;
import com.backend.miamapp.Repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import com.backend.miamapp.Repository.MealRepository;
import com.backend.miamapp.DTO.Meal.CreateMealDTO;
import com.backend.miamapp.DTO.Meal.ResponseMealDTO;
import org.springframework.stereotype.Service;
import com.backend.miamapp.Service.MealService;
import com.backend.miamapp.Mapper.MealMapper;
import com.backend.miamapp.Entity.Meal;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class MealServiceImpl implements MealService {

    @Autowired
    private MealRepository mealRepository;

    @Autowired
    private RestaurantRepository restaurantRepository;

    @Autowired
    private MealMapper mealMapper;

    @Override
    public ResponseMealDTO createMeal(CreateMealDTO createMealDTO) {
        Restaurant restaurant = restaurantRepository.findById(createMealDTO.getRestaurant_id())
                .orElseThrow(() -> new EntityNotFoundException("Restaurant not found"));

        Meal entity = mealMapper.toEntity(createMealDTO);
        entity.setRestaurant(restaurant);
        Meal meal = mealRepository.save(entity);
        return mealMapper.toResponse(meal);
    }

    @Override
    public Page<ResponseMealDTO> getAllMeals(Pageable pageable) {
        Page<Meal> meals = mealRepository.findAll(pageable);
        if (meals.isEmpty()){
            throw new RuntimeException("The are no meals yet");
        }
        return meals.map(mealMapper::toResponse);
    }

    @Override
    public ResponseMealDTO getMealById(Long id) {
        if(mealRepository.existsById(id)){
            Meal meal = mealRepository.findById(id).get();
            return mealMapper.toResponse(meal);
        }else{
            throw new EntityNotFoundException("This Meal with the id " + id + " doesn not exist");
        }
    }


    @Override
    public boolean deleteMeal(Long id) {
        Optional<Meal> meal = mealRepository.findById(id);
        if (meal.isPresent()){
            mealRepository.deleteById(id);
            return true;
        }
        else {
            throw new EntityNotFoundException("Meal not found");
        }
    }

     @Override
    public ResponseMealDTO updateMeal(CreateMealDTO createMealDTO , Long id) {
        return null;
    }



    @Override
    public List<ResponseMealDTO> getTop3OrdredMeals() {
        List<Meal> Top3Meals  = mealRepository.findTop3MostOrderedMeals();
        return Top3Meals.stream().map(mealMapper::toResponse).toList();
    }

    @Override
    public ResponseMealDTO updateQuantity(UpdateQuantity updateQuantity) {
        Meal meal = mealRepository.findById(updateQuantity.getId())
                .orElseThrow(() -> new EntityNotFoundException("Meal not found with id: " + updateQuantity.getId()));
        meal.setQuantity(updateQuantity.getQuantity());
        mealRepository.save(meal);
        return mealMapper.toResponse(meal);
    }

}