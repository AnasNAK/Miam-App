package com.backend.miamapp.DTO.Meal;

import com.backend.miamapp.DTO.Order.OrderEmbeded;
import com.backend.miamapp.Entity.Enum.MealCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Duration;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MealForOrders {
    private Long id;
    private String name;
    private String description;
    private Duration preparationTime;
    private double price;
    private int quantity;
    private MealCategory category;
}
