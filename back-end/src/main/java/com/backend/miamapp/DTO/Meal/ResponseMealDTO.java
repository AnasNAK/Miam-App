package com.backend.miamapp.DTO.Meal;

import com.backend.miamapp.DTO.Order.OrderEmbeded;
import com.backend.miamapp.Entity.Enum.MealCategory;
import com.backend.miamapp.Entity.Restaurant;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Duration;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseMealDTO {
    private Long id;
    private String name;
    private String description;
    private String imageUrl;
    private Duration preparationTime;
    private double price;
    private int quantity;
    private MealCategory category;
    private Restaurant restaurant;
    private List<OrderEmbeded> orders;
}