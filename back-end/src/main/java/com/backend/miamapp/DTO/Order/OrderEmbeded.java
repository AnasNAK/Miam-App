package com.backend.miamapp.DTO.Order;

import com.backend.miamapp.Entity.Enum.OrderStatus;
import com.backend.miamapp.Entity.Enum.PaymentMethod;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class OrderEmbeded {
    private Long id;
    private LocalDateTime orderDate;
    private PaymentMethod paymentMethod;
    private String note;
    private OrderStatus status = OrderStatus.PENDING;
}
