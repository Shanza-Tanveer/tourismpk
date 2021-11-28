package com.tourism.tourismcore.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.tourism.tourismcore.generator.SoftDeleteSuper;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "system_property")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class SystemProperty extends SoftDeleteSuper {

    @Column(name = "PROPERTY_KEY")
    private String propertyKey;

    @Column(name = "PROPERTY_VALUE", length = 4000)
    private String propertyValue;

    @Column(name = "TYPE")
    @Enumerated(EnumType.STRING)
    private SystemPropertyType type = SystemPropertyType.PLAIN_TEXT;

    @Column(name = "PROVIDED_TO_CLIENT")
    private boolean providedToClient;

    public enum SystemPropertyType {
        PLAIN_TEXT,
        ENCODED_PASSWORD
    }

    public enum PropertiesKey {
        BASE_URL
    }

}
