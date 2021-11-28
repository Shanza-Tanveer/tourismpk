package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.OrderItemDetails;
import com.tourism.tourismcore.repository.OrderItemDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/orderItemDetails")
public class OrderItemDetailsController {

    @Autowired
    private OrderItemDetailsRepo orderItemDetailsRepo;

    @GetMapping
    public List<OrderItemDetails> findAllOrderItemDetails() {
        return orderItemDetailsRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<OrderItemDetails> findOrderItemDetailsById(@PathVariable(value = "Id") Integer id) {
        Optional<OrderItemDetails> orderItemDetails = orderItemDetailsRepo.findById(id);

        if(orderItemDetails.isPresent()){
            return ResponseEntity.ok().body(orderItemDetails.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public OrderItemDetails saveOrderItemDetails(@Validated @RequestBody OrderItemDetails orderItemDetails) {
        String isError = validateOrderItemDetails(orderItemDetails);

        if (Strings.isBlank(isError)) {
            // return isError;
        }
        return orderItemDetailsServiceImpl.saveOrderItemDetails(orderItemDetails);
    }

    private String validateOrderItemDetails(OrderItemDetails orderItemDetails) {
        if (Strings.isBlank(orderItemDetails.getQuantity())) {
            return "OrderItemDetails quantity is mandatory";
        }

        if (Strings.isBlank(orderItemDetails.getStatus())) {
            return "OrderItemDetails status is mandatory";
        }

        if (Strings.isBlank(orderItemDetails.getPaymentStatus())) {
            return "OrderItemDetails paymentStatus is mandatory";
        }

        return null;
    }
}

