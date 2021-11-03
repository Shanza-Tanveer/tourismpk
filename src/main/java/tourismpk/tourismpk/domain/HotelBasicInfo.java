package tourismpk.tourismpk.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "hotel_basic_info")
public class HotelBasicInfo {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "number_of_rooms")
    private int numberOfRooms;

    @Column(name = "hotel_name")
    private String hotelName;

    @Column(name = "hotel_code")
    private String hotelCode;

    @Column(name = "address")
    private String address;

    @Column(name = "post_code")
    private String postCode;

    @Column(name = "city")
    private String City;

    @Column(name = "country")
    private String Country;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "star_rating")
    private String starRating;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "last_modified_date")
    private Date lastModifiedDate;

    @Column(name = "is_active")
    private Boolean isActive;
}
