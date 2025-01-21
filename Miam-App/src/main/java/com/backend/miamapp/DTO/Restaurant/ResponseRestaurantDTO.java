package com.backend.miamapp.DTO.Restaurant;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseRestaurantDTO {
    private Long id;
    private String name;
    private String location;
}