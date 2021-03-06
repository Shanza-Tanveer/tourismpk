package com.tourism.tourismcore.repository;

import com.tourism.tourismcore.domain.RoomAvailability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RoomAvailabilityRepo extends JpaRepository<RoomAvailability, Integer> {

    @Query(value = "select room from RoomAvailability room")
    List<RoomAvailability> room();

    @Query(value = "select room from RoomAvailability room where room.id = :id")
    RoomAvailability fetchRoomById (@Param("id") Integer roomId);
}
