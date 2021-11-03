package tourismpk.tourismpk.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "admin_user")
public class AdminUser {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "user_name")
    private String userName;

    @Column(name = "password")
    private String Password;

    @Column(name = "email")
    private String Email;

    @Column(name = "login_ip")
    private String Ip;

    @Column(name = "modified_by")
    private String modifiedBy;

    @Column(name = "last_login_date")
    private Date lastLoginDate;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "last_modified_date")
    private Date lastModifiedDate;

    @Column(name = "is_active")
    private Boolean isActive;

}
