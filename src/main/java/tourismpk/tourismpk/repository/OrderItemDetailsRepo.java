package tourismpk.tourismpk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tourismpk.tourismpk.domain.OrderItemDetails;

import java.util.List;

@Repository
public interface OrderItemDetailsRepo extends JpaRepository<OrderItemDetails, Integer> {

    @Query(value = "select item from OrderItemDetails item")
    List<OrderItemDetails> details();

    @Query(value = "select item from OrderItemDetails item where item.id = :id")
    OrderItemDetails fetchItemById (@Param("id") Integer itemId);
}
