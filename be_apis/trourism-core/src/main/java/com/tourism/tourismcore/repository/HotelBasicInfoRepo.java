package com.tourism.tourismcore.repository;

import com.tourism.tourismcore.domain.HotelBasicInfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HotelBasicInfoRepo extends JpaRepository<HotelBasicInfo, Integer> {

    @Query(value = "select info from HotelBasicInfo info")
    List<HotelBasicInfo> info();

    @Query(value = "select info from HotelBasicInfo info where info.id = :id")
    HotelBasicInfo fetchInfoById (@Param("id") Integer infoId);
}
