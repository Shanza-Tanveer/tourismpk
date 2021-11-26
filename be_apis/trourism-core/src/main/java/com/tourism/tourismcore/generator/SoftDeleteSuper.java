package com.tourism.tourismcore.generator;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;


@MappedSuperclass
@Data
public class SoftDeleteSuper extends GenericIdSuperEntity{

    @Column(name = "is_active", columnDefinition = "boolean default true")
    private boolean isActive = true;
}
