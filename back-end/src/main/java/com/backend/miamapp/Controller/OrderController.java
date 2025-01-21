package com.backend.miamapp.Controller;

import com.backend.miamapp.Service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.backend.miamapp.DTO.Order.ResponseOrderDTO;
import com.backend.miamapp.DTO.Order.CreateOrderDTO;
import jakarta.validation.Valid;

@RestController
@RequestMapping("/order")
public class OrderController {

    @Autowired
    private OrderService orderService;

    @PostMapping
    public ResponseEntity<ResponseOrderDTO> createOrder(@RequestBody @Valid CreateOrderDTO createOrderDTO) {
        ResponseOrderDTO response = orderService.createOrder(createOrderDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @GetMapping
    public ResponseEntity<Page<ResponseOrderDTO>> getAllOrders(Pageable pageable) {
        Page<ResponseOrderDTO> response = orderService.getAllOrders(pageable);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @GetMapping("/{orderId}")
    public ResponseEntity<ResponseOrderDTO> getOrderById(@PathVariable("orderId") Long id){
        ResponseOrderDTO response = orderService.getOrderById(id);
        return ResponseEntity.status(HttpStatus.FOUND).body(response);
    }

    @DeleteMapping("/{orderId}")
    public ResponseEntity<?> deleteOrderById(@PathVariable("orderId") Long id){
        if(orderService.deleteOrder(id)){
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Deleted Succefully");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Something went wrong");
    }

    @PatchMapping("/{orderId}")
    public ResponseEntity<ResponseOrderDTO> updateOrder(@RequestBody CreateOrderDTO createOrderDTO , @PathVariable("orderId") Long id){
        ResponseOrderDTO response = orderService.updateOrder(createOrderDTO , id);
        return ResponseEntity.status(HttpStatus.OK).body(response);
    }

}
