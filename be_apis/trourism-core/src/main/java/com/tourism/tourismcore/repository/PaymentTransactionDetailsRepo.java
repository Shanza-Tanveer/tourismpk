package com.tourism.tourismcore.repository;

import com.tourism.tourismcore.domain.PaymentTransactionDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PaymentTransactionDetailsRepo extends JpaRepository<PaymentTransactionDetails, Integer> {

    @Query(value = "select transaction from PaymentTransactionDetails transaction")
    List<PaymentTransactionDetails> transaction();

    @Query(value = "select transaction from PaymentTransactionDetails transaction where transaction.id = :id")
    PaymentTransactionDetails fetchTransactionById (@Param("id") Integer transactionId);
}
