package com.tourism.tourismcore.domain;

import lombok.Data;

import javax.persistence.*;
import java.util.List;


@Entity
@Table(name = "SEC_APP_ROLE")
@Data
public class AppRole extends GenericLongId {


    @Column(name="ROLE_NAME")
    private String roleName;

    @Column(name="DESCRIPTION")
    private String description;

    @Column(name="ACTIVE")
    private Boolean active;

    @ManyToMany(fetch = FetchType.EAGER,cascade = {CascadeType.MERGE})
    @JoinTable(
            name = "SEC_ROLE_PERMISSION",
            joinColumns = @JoinColumn(
                    name = "ROLE_ID"),
            inverseJoinColumns = @JoinColumn(
                    name = "PERMISSION_ID"))
    private List<AppPermission> permissions;

    @Override
    public String getEntityDisplayField() {

        return roleName;
    }
}


