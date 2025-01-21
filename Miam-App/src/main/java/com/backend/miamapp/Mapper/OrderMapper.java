package com.backend.miamapp.Mapper;

import com.backend.miamapp.DTO.Order.CreateOrderDTO;
import com.backend.miamapp.DTO.Order.ResponseOrderDTO;
import com.backend.miamapp.Entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface OrderMapper {

    Order toEntity(CreateOrderDTO createOrderDto);
    ResponseOrderDTO toResponse(Order order);
}