package com.tourism.tourismcore.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Data
@MappedSuperclass
public class GenericLongId implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    protected Long id;

    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    public String getEntityDisplayField() {

        return String.valueOf(id);
    }

}
