package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.PaymentTransactionDetails;
import com.tourism.tourismcore.repository.PaymentTransactionDetailsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
    public PaymentTransactionDetails paymentTransactionDetails(@Validated @RequestBody PaymentTransactionDetails paymentTransactionDetails) {
        String isError = validatePaymentTransactionDetails(paymentTransactionDetails);

        if (Strings.isBlank(isError)) {
            // return isError;
        }
        return paymentTransactionDetailsServiceImpl.savePaymentTransactionDetails(paymentTransactionDetails);
    }

    private String validatePaymentTransactionDetails(PaymentTransactionDetails paymentTransactionDetails) {
        if (Strings.isBlank(paymentTransactionDetails.getStatus())) {
            return "PaymentTransactionDetails status is mandatory";
        }

        if (Strings.isBlank(paymentTransactionDetails.getCardHolderName())) {
            return "PaymentTransactionDetails cardHolderName is mandatory";
        }

        if (Strings.isBlank(paymentTransactionDetails.getCardType())) {
            return "PaymentTransactionDetails cardType is mandatory";
        }

        if (Strings.isBlank(paymentTransactionDetails.getCVC())) {
            return "PaymentTransactionDetails cvc is mandatory";
        }

        return null;
    }
}
