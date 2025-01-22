package com.backend.miamapp.Service.Impl;
import com.backend.miamapp.Entity.Meal;
import com.backend.miamapp.Entity.Order_Meal;
import com.backend.miamapp.Repository.MealRepository;
import com.backend.miamapp.Repository.Order_MealRepository;
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
    @Autowired
    private MealRepository mealRepository;
    @Autowired
    private Order_MealRepository order_MealRepository;

    @Override
    public ResponseOrderDTO createOrder(CreateOrderDTO createOrderDTO) {
        Order entity = orderMapper.toEntity(createOrderDTO);
        Order savedOrder = orderRepository.save(entity);

        List<Order_Meal> orderMeals = createOrderDTO.getMealsOrdsList().stream()
                .map(mealOrds -> {
                    Meal meal = mealRepository.findById(mealOrds.getId())
                            .orElseThrow(() -> new EntityNotFoundException("Meal not found with ID: " + mealOrds.getId()));

                    if (mealOrds.getQuantity() > meal.getQuantity()) {
                        throw new IllegalArgumentException("Requested quantity for meal ID "
                                + meal.getId() + " exceeds available quantity. Available: "
                                + meal.getQuantity() + ", Requested: " + mealOrds.getQuantity());
                    }

                    meal.setQuantity(meal.getQuantity() - mealOrds.getQuantity());
                    mealRepository.save(meal);


                    Order_Meal orderMeal = new Order_Meal();
                    orderMeal.setMeal(meal);
                    orderMeal.setOrder(savedOrder);
                    orderMeal.setQuantity(mealOrds.getQuantity());
                    return orderMeal;
                })
                .toList();

        order_MealRepository.saveAll(orderMeals);
        savedOrder.setOrder_Meals(orderMeals);
        return orderMapper.toResponse(savedOrder);
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