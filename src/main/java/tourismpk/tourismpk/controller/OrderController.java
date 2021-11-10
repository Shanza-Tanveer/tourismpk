package tourismpk.tourismpk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tourismpk.tourismpk.domain.Order;
import tourismpk.tourismpk.repository.OrderRepo;

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
    public Order saveOrder(@Validated @RequestBody Order order) {
        return orderRepo.save(order);
    }
}
