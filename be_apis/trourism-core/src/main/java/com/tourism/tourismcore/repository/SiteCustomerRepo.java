package com.tourism.tourismcore.repository;

import com.tourism.tourismcore.domain.SiteCustomer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SiteCustomerRepo extends JpaRepository<SiteCustomer, Integer> {

    @Query(value = "select customer from SiteCustomer customer")
    List<SiteCustomer> customer();

    @Query(value = "select customer from SiteCustomer customer where customer.id = :id")
    SiteCustomer fetchCustomerById (@Param("id") Integer customerId);
}
