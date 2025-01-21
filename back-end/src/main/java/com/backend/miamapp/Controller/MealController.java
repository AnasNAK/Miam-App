package com.backend.miamapp.Controller;

import com.backend.miamapp.DTO.Meal.UpdateQuantity;
import com.backend.miamapp.Service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.backend.miamapp.DTO.Meal.ResponseMealDTO;
import com.backend.miamapp.DTO.Meal.CreateMealDTO;
import jakarta.validation.Valid;

import java.util.List;

@RestController
@RequestMapping("/meal")
public class MealController {

    @Autowired
    private MealService mealService;

    @PostMapping
    public ResponseEntity<ResponseMealDTO> createMeal(@RequestBody @Valid CreateMealDTO createMealDTO) {
        ResponseMealDTO response = mealService.createMeal(createMealDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<Page<ResponseMealDTO>> getAllMeals(Pageable pageable) {
        Page<ResponseMealDTO> response = mealService.getAllMeals(pageable);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @GetMapping("/{mealId}")
    public ResponseEntity<ResponseMealDTO> getMealById(@PathVariable("mealId") Long id){
        ResponseMealDTO response = mealService.getMealById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @DeleteMapping("/{mealId}")
    public ResponseEntity<?> deleteMealById(@PathVariable("mealId") Long id){
        if(mealService.deleteMeal(id)){
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Deleted Succefully");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something went wrong");
    }

    @PatchMapping("/{mealId}")
    public ResponseEntity<ResponseMealDTO> updateMeal(@RequestBody CreateMealDTO createMealDTO , @PathVariable("mealId") Long id){
        ResponseMealDTO response = mealService.updateMeal(createMealDTO , id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

    @GetMapping("/topOrderedMeals")
    public ResponseEntity<List<ResponseMealDTO>> getTopMeals(){
            List<ResponseMealDTO> responseMealDTOS = mealService.getTop3OrdredMeals();
            if(responseMealDTOS.isEmpty()){
                return ResponseEntity.status(HttpStatus.NO_CONTENT).body(null);
            }
            return ResponseEntity.status(HttpStatus.OK).body(responseMealDTOS);
    }

    @PutMapping("/updateQuantity")
    public ResponseEntity<ResponseMealDTO> updateQuantityMeal(@RequestBody @Valid UpdateQuantity updateQuantity){
        ResponseMealDTO mealDTO = mealService.updateQuantity(updateQuantity);
        if (mealDTO == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        return ResponseEntity.status(HttpStatus.OK).body(mealDTO);
    }


}
