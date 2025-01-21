package com.backend.miamapp.DTO.Meal;

import com.backend.miamapp.Entity.Enum.MealCategory;
import com.backend.miamapp.Entity.Restaurant;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Duration;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateMealDTO {
    @NotEmpty
    private String name;
    @NotEmpty
    private String description;
    @NotEmpty
    private String imageUrl;
    @NotNull
    private Duration preparationTime;
    @NotNull
    private double price;
    @NotNull
    private int quantity;
    private MealCategory category;
    @NotNull
    private Long restaurant_id;
}