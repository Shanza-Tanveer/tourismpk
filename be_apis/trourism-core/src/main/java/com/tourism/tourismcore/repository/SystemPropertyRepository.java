package com.tourism.tourismcore.repository;

import com.tourism.tourismcore.domain.SystemProperty;

import java.util.List;


public interface SystemPropertyRepository extends BasicRepository<SystemProperty> {

     SystemProperty readByPropertyKey(String propertyKey);

     List<SystemProperty> findByProvidedToClientTrue();

}
