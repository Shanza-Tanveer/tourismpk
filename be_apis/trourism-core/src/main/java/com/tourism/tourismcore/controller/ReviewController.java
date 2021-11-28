package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.Review;
import com.tourism.tourismcore.repository.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
        String isError = validateReview(review);

        if (Strings.isBlank(isError)) {
            // return isError;
        }
        return ReviewServiceImpl.saveReviewDetails(review);
    }

    private String validateReview(Review review) {
        if (Strings.isBlank(review.getTitle())) {
            return "Review title is mandatory";
        }

        if (Strings.isBlank(review.getStatus())) {
            return "Review status is mandatory";
        }

        if (Strings.isBlank(review.getContent())) {
            return "Review content is mandatory";
        }

        return null;
    }
}
