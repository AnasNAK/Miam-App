package com.backend.miamapp.Service.Impl;
import org.springframework.beans.factory.annotation.Autowired;
import com.backend.miamapp.Repository.OrderRepository;
import com.backend.miamapp.DTO.Order.CreateOrderDTO;
import com.backend.miamapp.DTO.Order.ResponseOrderDTO;
import org.springframework.stereotype.Service;
import com.backend.miamapp.Service.OrderService;
import com.backend.miamapp.Mapper.OrderMapper;
import com.backend.miamapp.Entity.Order;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;


@Service
public class OrderServiceImpl implements OrderService {

    @Autowired
    private OrderRepository orderRepository;

    @Autowired
    private OrderMapper orderMapper;

    @Override
    public ResponseOrderDTO createOrder(CreateOrderDTO createOrderDTO) {
        Order entity = orderMapper.toEntity(createOrderDTO);
        Order order = orderRepository.save(entity);
        return orderMapper.toResponse(entity);
    }

    @Override
    public Page<ResponseOrderDTO> getAllOrders(Pageable pageable) {
        Page<Order> orders = orderRepository.findAll(pageable);
        if (orders.isEmpty()){
            throw new RuntimeException("The are no orders yet");
        }
        return orders.map(orderMapper::toResponse);
    }

    @Override
    public ResponseOrderDTO getOrderById(Long id) {
        if(orderRepository.existsById(id)){
            Order order = orderRepository.findById(id).get();
            return orderMapper.toResponse(order);
        }else{
            throw new EntityNotFoundException("This Order with the id " + id + " doesn not exist");
        }
    }


    @Override
    public boolean deleteOrder(Long id) {
        Optional<Order> order = orderRepository.findById(id);
        if (order.isPresent()){
            orderRepository.deleteById(id);
            return true;
        }
        else {
            throw new EntityNotFoundException("Order not found");
        }
    }

     @Override
    public ResponseOrderDTO updateOrder(CreateOrderDTO createOrderDTO , Long id) {
        return null;
    }
}