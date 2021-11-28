package tourismpk.tourismpk.service;

@Service
public class ReviewServiceImpl {

    @Autowired
    private ReviewRepo reviewRepo;

    public List<Review> getAllReview() {
        return paymentTransactionDetailsRepo.findAll();
    }

    public Optional<Review> getReviewById(Integer id) {
        return reviewRepo.findById(id);
    }

    public Review saveReview(Review review) {
        return reviewRepo.save(review);
    }
}
