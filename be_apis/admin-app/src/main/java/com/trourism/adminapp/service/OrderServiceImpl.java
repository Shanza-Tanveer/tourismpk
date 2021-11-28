package tourismpk.tourismpk.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tourismpk.tourismpk.domain.Order;
import tourismpk.tourismpk.repository.OrderRepo;

import java.util.List;
import java.util.Optional;

@Service
public class OrderServiceImpl {

    @Autowired
    private OrderRepo orderRepo;

    public List<Order> getAllOrder() {
        return orderRepo.findAll();
    }

    public Optional<Order> getOrderById(Integer id) {
        return orderRepo.findById(id);
    }

    public Order saveOrder (Order order) {
        return orderRepo.save(order);
    }
}
