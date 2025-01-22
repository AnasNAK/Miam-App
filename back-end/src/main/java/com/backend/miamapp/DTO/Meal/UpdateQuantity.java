package com.backend.miamapp.DTO.Meal;


import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UpdateQuantity {
    @NotNull
    private Long id;
    @NotNull
    private int quantity;
}
