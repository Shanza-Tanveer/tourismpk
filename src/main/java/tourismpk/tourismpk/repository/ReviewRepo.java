package tourismpk.tourismpk.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import tourismpk.tourismpk.domain.Review;

import java.util.List;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Integer> {

    @Query(value = "select review from Review review")
    List<Review> review();

    @Query(value = "select review from Review review where review.id = :id")
    Review fetchReviewById (@Param("id") Integer reviewId);
}
