package com.tourism.tourismcore.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "order_item_details")
public class OrderItemDetails {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "room_id")
    private int roomId;

    @Column(name = "price")
    private int price;

    @Column(name = "oder_id")
    private int orderId;

    @Column(name = "payment_trx_id")
    private int paymentTrxId;

    @Column(name = "quantity")
    private String quantity;

    @Column(name = "status")
    private String Status;

    @Column(name = "payment_status")
    private String paymentStatus;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "start_date")
    private Date startDate;

    @Column(name = "end_date")
    private Date endDate;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "last_modified_date")
    private Date lastModifiedDate;

    @Column(name = "is_active")
    private Boolean isActive;
}
