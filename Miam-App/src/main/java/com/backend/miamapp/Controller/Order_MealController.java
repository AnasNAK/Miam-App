package com.backend.miamapp.Controller;

import com.backend.miamapp.Service.Order_MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.backend.miamapp.DTO.Order_Meal.ResponseOrder_MealDTO;
import com.backend.miamapp.DTO.Order_Meal.CreateOrder_MealDTO;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/order_meal")
public class Order_MealController {

    @Autowired
    private Order_MealService order_mealService;

    @PostMapping
    public ResponseEntity<ResponseOrder_MealDTO> createOrder_Meal(@RequestBody @Valid CreateOrder_MealDTO createOrder_MealDTO) {
        ResponseOrder_MealDTO response = order_mealService.createOrder_Meal(createOrder_MealDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<Page<ResponseOrder_MealDTO>> getAllOrder_Meals(Pageable pageable) {
        Page<ResponseOrder_MealDTO> response = order_mealService.getAllOrder_Meals(pageable);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @GetMapping("/{order_mealId}")
    public ResponseEntity<ResponseOrder_MealDTO> getOrder_MealById(@PathVariable("order_mealId") Long id){
        ResponseOrder_MealDTO response = order_mealService.getOrder_MealById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @DeleteMapping("/{order_mealId}")
    public ResponseEntity<?> deleteOrder_MealById(@PathVariable("order_mealId") Long id){
        if(order_mealService.deleteOrder_Meal(id)){
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Deleted Succefully");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something went wrong");
    }

    @PatchMapping("/{order_mealId}")
    public ResponseEntity<ResponseOrder_MealDTO> updateOrder_Meal(@RequestBody CreateOrder_MealDTO createOrder_MealDTO , @PathVariable("order_mealId") Long id){
        ResponseOrder_MealDTO response = order_mealService.updateOrder_Meal(createOrder_MealDTO , id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
