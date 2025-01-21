package com.backend.miamapp.DTO.Restaurant;

import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CreateRestaurantDTO {
    @NotEmpty
    private String name;
    @NotEmpty
    private String location;
}