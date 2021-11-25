package com.tourism.tourismcore.generator;


import lombok.Data;

import javax.persistence.*;

@MappedSuperclass
@Data
public class GenericIdSuperEntity extends BasicEntityImpl{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    protected Integer id;
}
