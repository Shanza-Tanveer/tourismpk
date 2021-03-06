package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.RoomAvailability;
import com.tourism.tourismcore.repository.RoomAvailabilityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/roomAvailability")
public class RoomAvailabilityController {

    @Autowired
    private RoomAvailabilityRepo roomAvailabilityRepo;

    @GetMapping
    public List<RoomAvailability> findAllRoomAvailability(){
        return roomAvailabilityRepo.findAll();
    }

    @GetMapping
    public ResponseEntity<RoomAvailability> findRoomAvailabilityById(@PathVariable(value = "id") Integer id) {
        Optional<RoomAvailability> roomAvailability = roomAvailabilityRepo.findById(id);

        if(roomAvailability.isPresent()) {
            return ResponseEntity.ok().body(roomAvailability.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public RoomAvailability saveRoomAvailability(@Validated @RequestBody RoomAvailability roomAvailability){
        return roomAvailabilityRepo.save(roomAvailability);
    }
}
