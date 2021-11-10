package tourismpk.tourismpk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tourismpk.tourismpk.domain.PaymentTransactionDetails;
import tourismpk.tourismpk.repository.PaymentTransactionDetailsRepo;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/paymentTransactionDetails")
public class PaymentTransactionDetailsController {

    @Autowired
    private PaymentTransactionDetailsRepo paymentTransactionDetailsRepo;

    @GetMapping
    public List<PaymentTransactionDetails> findAllPaymentTransactionDetails(){
        return paymentTransactionDetailsRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<PaymentTransactionDetails> findPaymentTransactionDetailsById(@PathVariable(value = "id") Integer id) {
        Optional<PaymentTransactionDetails> paymentTransactionDetails = paymentTransactionDetailsRepo.findById(id);

        if(paymentTransactionDetails.isPresent()){
            return ResponseEntity.ok().body(paymentTransactionDetails.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public PaymentTransactionDetails savePaymentTransactionDetails(@Validated @RequestBody PaymentTransactionDetails paymentTransactionDetails) {
        return paymentTransactionDetailsRepo.save(paymentTransactionDetails);
    }
}
