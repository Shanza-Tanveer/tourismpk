package com.tourism.tourismcore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

@NoRepositoryBean
public interface BasicRepository<ENTITY> extends JpaRepository<ENTITY, Integer> {

}