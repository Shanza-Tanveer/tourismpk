package com.tourism.tourismcore.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "gallery")
public class Gallery {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "room_id")
    private int roomId;

    @Column(name = "hotel_id")
    private int hotelId;

    @Column(name = "customer_id")
    private int customerId;

    @Column(name = "url")
    private String url;

    @Column(name = "title")
    private String title;

    @Column(name = "status")
    private String status;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "last_modified_date")
    private Date lastModifiedDate;

    @Column(name = "is_active")
    private Boolean isActive;

}
