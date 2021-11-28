package com.tourism.tourismcore.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Data
@Entity
@Table(name = "room_basic_info")
public class RoomBasicInfo {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "hotel_id")
    private int hotelId;

    @Column(name = "room_id")
    private int roomId;

    @Column(name = "standard_room_id")
    private int standardRoomId;

    @Column(name = "superior_room_id")
    private int superiorRoomId;

    @Column(name = "superior_deluxe_room_id")
    private int superiorDeluxeRoomId;

    @Column(name = "executive_room_id")
    private int executiveRoomId;

    @Column(name = "family_room_id")
    private int familyRoomId;

    @Column(name = "friendly_room_id")
    private int friendlyRoomId;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "last_modified_date")
    private Date lastModifiedDate;

    @Column(name = "is_active")
    private Boolean isActive;

}
