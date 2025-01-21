package com.backend.miamapp.DTO.Order;

import com.backend.miamapp.Entity.Enum.OrderStatus;
import com.backend.miamapp.Entity.Enum.PaymentMethod;
import com.backend.miamapp.Entity.Meal;
import jakarta.persistence.*;
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
public class CreateOrderDTO {
    @NotNull
    private LocalDateTime orderDate = LocalDateTime.now();
    @NotEmpty
    private PaymentMethod paymentMethod;
    @NotEmpty
    private OrderStatus status = OrderStatus.PENDING;
    @NotEmpty
    private List<Long> mealIds;
}