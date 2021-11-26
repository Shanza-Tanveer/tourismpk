package com.tourism.tourismcore.domain;

import com.tourism.tourismcore.generator.GenericIdSuperEntity;
import lombok.Data;

import javax.persistence.*;


@Entity
@Table(name = "SEC_APP_PERMISSION")
@Data
public class AppPermission extends GenericIdSuperEntity {

    @Column(name="PERMISSION_NAME")
    private String permissionName;

    @Column(name="TYPE")
    @Enumerated(EnumType.STRING)
    private PermissionType type= PermissionType.ALL;

    @Column(name="ACTIVE")
    private Boolean active=true;


    enum PermissionType{
        VIEW,EDIT,DELETE,ALL
    }
}


