package com.backend.miamapp.Entity;
import com.backend.miamapp.Entity.Enum.OrderStatus;
import com.backend.miamapp.Entity.Enum.PaymentMethod;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "commands")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "orderDate")
    private LocalDateTime orderDate;

    @Column(name = "paymentMethod")
    @Enumerated(EnumType.STRING)
    private PaymentMethod paymentMethod;

    @Column(name = "status")
    @Enumerated(EnumType.STRING)
    private OrderStatus status;

    @OneToMany(mappedBy = "order" , fetch = FetchType.EAGER , cascade = CascadeType.REMOVE)
    private List<Order_Meal> Order_Meals;
}
