package com.tourism.tourismcore.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;
@Data
@Entity
@Table(name = "payment_transaction_details")
public class PaymentTransactionDetails {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "last_four_digits")
    private int lastFourDigits;

    @Column(name = "gateway_trx_id")
    private int gatewayTrxId;

    @Column(name = "paid_amount")
    private int paidAmount;

    @Column(name = "card_type")
    private String cardType;

    @Column(name = "card_holder_name")
    private String cardHolderName;

    @Column(name = "status")
    private String status;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "cvc")
    private String cvc;

    @Column(name = "expiry_date")
    private Date expiryDate;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "last_modified_date")
    private Date lastModifiedDate;

    @Column(name = "is_active")
    private Boolean isActive;
}
