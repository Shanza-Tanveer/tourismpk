package com.tourism.tourismcore.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;
@Data
@Entity
@Table(name = "room_availability")
public class RoomAvailability {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "room_id")
    private int roomId;

    @Column(name = "available_from")
    private Date availableFrom;

    @Column(name = "available_to")
    private Date availableTo;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "last_modified_date")
    private Date lastModifiedDate;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "is_active")
    private Boolean isActive;
}
