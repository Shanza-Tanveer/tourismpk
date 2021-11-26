package com.tourism.tourismcore.domain;

import com.tourism.tourismcore.generator.GenericIdSuperEntity;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;


@Data
@Entity
@Table(name = "admin_user")
public class AdminUser extends GenericIdSuperEntity {


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

    @Column(name = "is_active")
    private Boolean isActive;

    @ManyToOne(
            targetEntity = AppRole.class,optional = false
    )
    @JoinColumn(
            name = "ROLE_ID",nullable = false
    )
    protected AppRole role;

}
