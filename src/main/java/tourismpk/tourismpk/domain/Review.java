package tourismpk.tourismpk.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Table(name = "review")
public class Review {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "customer_id")
    private int customerId;

    @Column(name = "parent_id")
    private int parentId;

    @Column(name = "title")
    private String title;

    @Column(name = "content")
    private String content;

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
