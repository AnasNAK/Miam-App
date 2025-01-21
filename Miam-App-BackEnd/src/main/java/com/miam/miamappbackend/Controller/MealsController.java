package com.miam.miamappbackend.Controller;

import com.miam.miamappbackend.Service.MealsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.miam.miamappbackend.DTO.Meals.ResponseMealsDTO;
import com.miam.miamappbackend.DTO.Meals.CreateMealsDTO;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/meals")
public class MealsController {

    @Autowired
    private MealsService mealsService;

    @PostMapping
    public ResponseEntity<ResponseMealsDTO> createMeals(@RequestBody @Valid CreateMealsDTO createMealsDTO) {
        ResponseMealsDTO response = mealsService.createMeals(createMealsDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<Page<ResponseMealsDTO>> getAllMealss(Pageable pageable) {
        Page<ResponseMealsDTO> response = mealsService.getAllMealss(pageable);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @GetMapping("/{mealsId}")
    public ResponseEntity<ResponseMealsDTO> getMealsById(@PathVariable("mealsId") Long id){
        ResponseMealsDTO response = mealsService.getMealsById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @DeleteMapping("/{mealsId}")
    public ResponseEntity<?> deleteMealsById(@PathVariable("mealsId") Long id){
        if(mealsService.deleteMeals(id)){
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Deleted Succefully");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something went wrong");
    }

    @PatchMapping("/{mealsId}")
    public ResponseEntity<ResponseMealsDTO> updateMeals(@RequestBody CreateMealsDTO createMealsDTO , @PathVariable("mealsId") Long id){
        ResponseMealsDTO response = mealsService.updateMeals(createMealsDTO , id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
