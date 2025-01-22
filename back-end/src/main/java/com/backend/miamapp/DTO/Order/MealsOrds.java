package com.backend.miamapp.DTO.Order;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MealsOrds {
    private Long id;
    private int quantity;
}
