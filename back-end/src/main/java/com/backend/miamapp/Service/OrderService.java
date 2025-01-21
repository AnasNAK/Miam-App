package com.backend.miamapp.Service;
import com.backend.miamapp.DTO.Order.CreateOrderDTO;
import com.backend.miamapp.DTO.Order.ResponseOrderDTO;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
public interface  OrderService {

    ResponseOrderDTO createOrder(CreateOrderDTO createOrderDTO);
    Page<ResponseOrderDTO> getAllOrders(Pageable pageable);
    ResponseOrderDTO getOrderById(Long id);
    ResponseOrderDTO updateOrder(CreateOrderDTO createOrderDTO , Long id);
    boolean deleteOrder(Long id);

}