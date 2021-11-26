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
        return orderItemDetailsRepo.save(orderItemDetails);
    }
}
