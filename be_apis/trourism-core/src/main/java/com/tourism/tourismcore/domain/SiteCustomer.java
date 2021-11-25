package com.tourism.tourismcore.domain;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import java.util.Date;


@Entity
@Table(name = "site_customer")
public class SiteCustomer {

    @Column(name = "id", unique = true)
    private int id;

    @Column(name = "first_name" )
    private String firstName;

    @Column(name = "middle_name")
    private String middleName;

    @Column(name = "last_name")
    private String lastName;

    @Column(name = "date_of_birth")
    private String dateOfBirth;

    @Column(name = "phone_number")
    private String phoneNumber;

    @Column(name = "email")
    private String Email;

    @Column(name = "password")
    private String Password;

    @Column(name = "login_ip")
    private String loginIp;

    @Column(name = "email_verified")
    private String emailVerified;

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
