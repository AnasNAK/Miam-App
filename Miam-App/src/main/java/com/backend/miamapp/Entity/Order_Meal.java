package com.backend.miamapp.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "order_meal")
public class Order_Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
}
