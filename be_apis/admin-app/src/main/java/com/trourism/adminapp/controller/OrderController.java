package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.Order;
import com.tourism.tourismcore.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/order")
public class OrderController {

    @Autowired
    private OrderRepo orderRepo;

    @GetMapping
    public List<Order> findAllOrder() {
        return orderRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> findOrderById(@PathVariable(value = "id") Integer id) {
        Optional<Order> order = orderRepo.findById(id);

        if(order.isPresent()) {
            return ResponseEntity.ok().body(order.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Order saveInfo(@Validated @RequestBody Order order) {
        String isError = validateOrder(order);

        if (Strings.isBlank(isError)) {
            // return isError;
        }
        return orderServiceImpl.saveOrder(order);
    }

    private String validateOrder(Order order) {
        if (Strings.isBlank(order.getStatus())) {
            return "Order status is mandatory";
        }

        if (Strings.isBlank(order.getSubTotal())) {
            return "Order subTotal is mandatory";
        }

        if (Strings.isBlank(order.getTax())) {
            return "Order tax is mandatory";
        }

        if (Strings.isBlank(order.getGrandTotal())) {
            return "Order grandTotal is mandatory";
        }

        if (Strings.isBlank(order.getDiscount())) {
            return "Order discount is mandatory";
        }

        return null;
    }
}
