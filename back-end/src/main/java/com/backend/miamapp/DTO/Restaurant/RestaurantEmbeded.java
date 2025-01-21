package com.backend.miamapp.DTO.Restaurant;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RestaurantEmbeded {
    private Long id;
    private String name;
    private String localisation;
}
