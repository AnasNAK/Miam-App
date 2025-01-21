package com.miam.miamappbackend.Service;
import com.miam.miamappbackend.DTO.Meals.CreateMealsDTO;
import com.miam.miamappbackend.DTO.Meals.ResponseMealsDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
public interface  MealsService {

    ResponseMealsDTO createMeals(CreateMealsDTO createMealsDTO);
    Page<ResponseMealsDTO> getAllMealss(Pageable pageable);
    ResponseMealsDTO getMealsById(Long id);
    ResponseMealsDTO updateUser(CreateMealsDTO createMealsDTO , Long id);
    boolean deleteMeals(Long id);

}