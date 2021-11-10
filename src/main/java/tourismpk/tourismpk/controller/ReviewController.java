package tourismpk.tourismpk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tourismpk.tourismpk.domain.Review;
import tourismpk.tourismpk.repository.ReviewRepo;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    private ReviewRepo reviewRepo;

    @GetMapping
    public List<Review> findAllReview(){
        return reviewRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Review> findReviewById(@PathVariable(value = "id") Integer id) {
        Optional<Review> review = reviewRepo.findById(id);

        if(review.isPresent()) {
            return ResponseEntity.ok().body(review.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Review saveReview(@Validated @RequestBody Review review) {
        return reviewRepo.save(review);
    }
}
