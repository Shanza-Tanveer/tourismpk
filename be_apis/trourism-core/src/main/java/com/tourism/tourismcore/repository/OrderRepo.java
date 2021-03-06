package com.tourism.tourismcore.repository;

import com.tourism.tourismcore.domain.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepo extends JpaRepository<Order, Integer> {

    @Query(value = "select order from Order order")
    List<Order> order();

    @Query(value = "select order from Order order where order.id = :id")
     Order fetchOrderById (@Param("id") Integer orderId);
}
