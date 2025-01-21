package com.backend.miamapp.DTO.Restaurant;

import com.backend.miamapp.DTO.Meal.MealsEmbeded;
import com.backend.miamapp.DTO.Order.OrderEmbeded;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseRestaurantDTO {
    private Long id;
    private String name;
    private String location;
    private List<MealsEmbeded> mealList;
}