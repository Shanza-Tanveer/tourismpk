package tourismpk.tourismpk.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "facilities")
public class Facilities {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "hotel_id")
    private int hotelId;

    @Column(name = "room_id")
    private int roomId;

    @Column(name = "name")
    private String name;

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
