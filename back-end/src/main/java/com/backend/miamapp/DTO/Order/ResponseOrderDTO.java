package com.backend.miamapp.DTO.Order;

import com.backend.miamapp.DTO.Meal.MealForOrders;
import com.backend.miamapp.DTO.Meal.MealsEmbeded;
import com.backend.miamapp.Entity.Enum.OrderStatus;
import com.backend.miamapp.Entity.Enum.PaymentMethod;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseOrderDTO {
    private Long id;
    private LocalDateTime orderDate;
    private PaymentMethod paymentMethod;
    private OrderStatus status = OrderStatus.PENDING;
    private String note;
    private List<MealForOrders> meals;
}