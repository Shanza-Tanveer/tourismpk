package com.tourism.tourismcore.service;

import com.tourism.tourismcore.domain.SystemProperty;
import com.tourism.tourismcore.repository.SystemPropertyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SystemPropertyService {

    @Autowired
    private SystemPropertyRepository systemPropertyRepository;


    public String getPropertyByKey (String propertyKey) {

        SystemProperty property = systemPropertyRepository.readByPropertyKey(propertyKey);
        if (property != null && property.getPropertyValue() != null) {
            return property.getPropertyValue();
        }
        return null;
    }
}
