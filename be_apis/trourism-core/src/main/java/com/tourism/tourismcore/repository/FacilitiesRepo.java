package com.tourism.tourismcore.repository;

import com.tourism.tourismcore.domain.Facilities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FacilitiesRepo extends JpaRepository<Facilities, Integer> {

    @Query(value ="select facility from Facilities facility")
    List<Facilities> facility();

    @Query(value = "select facility from Facilities facility where facility.id = :id ")
    Facilities fetchFacilityById (@Param("id") Integer facilityId);
}
