package com.backend.miamapp.Controller;

import com.backend.miamapp.Service.RestaurantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.backend.miamapp.DTO.Restaurant.ResponseRestaurantDTO;
import com.backend.miamapp.DTO.Restaurant.CreateRestaurantDTO;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/restaurant")
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @PostMapping
    public ResponseEntity<ResponseRestaurantDTO> createRestaurant(@RequestBody @Valid CreateRestaurantDTO createRestaurantDTO) {
        ResponseRestaurantDTO response = restaurantService.createRestaurant(createRestaurantDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<Page<ResponseRestaurantDTO>> getAllRestaurants(Pageable pageable) {
        Page<ResponseRestaurantDTO> response = restaurantService.getAllRestaurants(pageable);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @GetMapping("/{restaurantId}")
    public ResponseEntity<ResponseRestaurantDTO> getRestaurantById(@PathVariable("restaurantId") Long id){
        ResponseRestaurantDTO response = restaurantService.getRestaurantById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @DeleteMapping("/{restaurantId}")
    public ResponseEntity<?> deleteRestaurantById(@PathVariable("restaurantId") Long id){
        if(restaurantService.deleteRestaurant(id)){
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Deleted Succefully");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something went wrong");
    }

    @PatchMapping("/{restaurantId}")
    public ResponseEntity<ResponseRestaurantDTO> updateRestaurant(@RequestBody CreateRestaurantDTO createRestaurantDTO , @PathVariable("restaurantId") Long id){
        ResponseRestaurantDTO response = restaurantService.updateRestaurant(createRestaurantDTO , id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
