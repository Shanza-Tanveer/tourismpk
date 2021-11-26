package com.tourism.tourismcore.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "order")
public class Order {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "user_id")
    private int userId;

    @Column(name = "no_of_guests")
    private int noOfGuests;

    @Column(name = "payment_trx_id")
    private int paymentTrxId;

    @Column(name = "status")
    private String status;

    @Column(name = "sub_total")
    private String subTotal;

    @Column(name = "tax")
    private String tax;

    @Column(name = "grand_total")
    private String grandTotal;

    @Column(name = "discount")
    private String discount;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "last_modified_date")
    private Date lastModifiedDate;

    @Column(name = "is_active")
    private Boolean isActive;
}
