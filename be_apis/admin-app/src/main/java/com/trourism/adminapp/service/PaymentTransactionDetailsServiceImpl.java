package tourismpk.tourismpk.service;

@Service
public class PaymentTransactionDetailsServiceImpl {

    @Autowired
    private PaymentTransactionDetailsRepo paymentTransactionDetailsRepo;

    public List<PaymentTransactionDetails> getAllPaymentTransactionDetails() {
        return paymentTransactionDetailsRepo.findAll();
    }

    public Optional<PaymentTransactionDetails> getPaymentTransactionDetailsById(Integer id) {
        return paymentTransactionDetailsRepo.findById(id);
    }

    public PaymentTransactionDetailsDetails savePaymentTransactionDetails(PaymentTransactionDetails paymentTransactionDetails) {
        return paymentTransactionDetailsRepo.save(paymentTransactionDetails);
    }
  }