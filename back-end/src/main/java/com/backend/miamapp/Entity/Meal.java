package com.backend.miamapp.Entity;
import com.backend.miamapp.Entity.Enum.MealCategory;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Duration;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "meal")
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "preparation_time")
    private Duration preparationTime;

    @Column(name = "description")
    private String description;

    @Column(name = "price")
    private double price;

    @Column(name = "quantity")
    private int quantity;

    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    private MealCategory category;

    @ManyToOne(fetch = FetchType.EAGER , cascade = CascadeType.REMOVE)
    @JoinColumn(name = "restaurant_id", nullable = false)
    private Restaurant restaurant;

    @ManyToMany(mappedBy = "meals")
    private List<Order> orders;
}
