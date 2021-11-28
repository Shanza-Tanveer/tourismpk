package tourismpk.tourismpk.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tourismpk.tourismpk.domain.OrderItemDetails;
import tourismpk.tourismpk.repository.OrderItemDetailsRepo;

import java.util.List;
import java.util.Optional;

@Service
public class OrderItemDetailsServiceImpl {

    @Autowired
    private OrderItemDetailsRepo orderItemDetailsRepo;

    public List<OrderItemDetails> getAllOrderItemDetails() {
        return orderItemDetailsRepo.findAll();
    }

    public Optional<OrderItemDetails> getOrderItemDetailsById(Integer id) {
        return orderItemDetailsRepo.findById(id);
    }

    public OrderItemDetails saveOrderItemDetails(OrderItemDetails orderItemDetails) {
        return orderItemDetailsRepo.save(orderItemDetails);
    }
}
