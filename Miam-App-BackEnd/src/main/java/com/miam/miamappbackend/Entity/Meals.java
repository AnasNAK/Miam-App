package com.miam.miamappbackend.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "meals")
public class Meals {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
}
