package com.miam.miamappbackend.Service.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import com.miam.miamappbackend.Repository.MealsRepository;
import com.miam.miamappbackend.DTO.Meals.CreateMealsDTO;
import com.miam.miamappbackend.DTO.Meals.ResponseMealsDTO;
import org.springframework.stereotype.Service;
import com.miam.miamappbackend.Service.MealsService;
import com.miam.miamappbackend.Mapper.MealsMapper;
import com.miam.miamappbackend.Entity.Meals;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;


@Service
public class MealsServiceImpl implements MealsService {

    @Autowired
    private MealsRepository mealsRepository;

    @Autowired
    private MealsMapper mealsMapper;

    @Override
    public ResponseMealsDTO createMeals(CreateMealsDTO createMealsDTO) {
        Meals entity = mealsMapper.toEntity(createMealsDTO);
        Meals meals = mealsRepository.save(entity);
        return mealsMapper.toResponse(entity);
    }

    @Override
    public Page<ResponseMealsDTO> getAllMealss(Pageable pageable) {
        Page<Meals> mealss = mealsRepository.findAll(pageable);
        if (mealss.isEmpty()){
            throw new RuntimeException("The are no mealss yet");
        }
        return mealss.map(mealsMapper::toResponse);
    }

    @Override
    public ResponseMealsDTO getMealsById(Long id) {
        if(mealsRepository.existsById(id)){
            Meals meals = mealsRepository.findById(id).get();
            return mealsMapper.toResponse(meals);
        }else{
            throw new EntityNotFoundException("This Meals with the id " + id + " doesn not exist");
        }
    }


    @Override
    public boolean deleteMeals(Long id) {
        Optional<Meals> meals = mealsRepository.findById(id);
        if (meals.isPresent()){
            mealsRepository.deleteById(id);
            return true;
        }
        else {
            throw new EntityNotFoundException("Meals not found");
        }
    }

     @Override
    public ResponseMealsDTO updateMeals(CreateMealsDTO createMealsDTO , Long id) {
        return null;
    }
}