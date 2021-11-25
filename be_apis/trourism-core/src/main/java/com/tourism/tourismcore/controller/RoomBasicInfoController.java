package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.RoomBasicInfo;
import com.tourism.tourismcore.repository.RoomBasicInfoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/roomBasicInfo")
public class RoomBasicInfoController {
    
    @Autowired
    private RoomBasicInfoRepo roomBasicInfoRepo;

    @GetMapping
    public List<RoomBasicInfo> findAllRoomBasicInfo(){
        return roomBasicInfoRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<RoomBasicInfo> findRoomBasicInfoById(@PathVariable(value = "id") Integer id) {
        Optional<RoomBasicInfo> roomBasicInfo = roomBasicInfoRepo.findById(id);

        if(roomBasicInfo.isPresent()) {
            return ResponseEntity.ok().body(roomBasicInfo.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public RoomBasicInfo saveRoomBasicInfo(@Validated @RequestBody RoomBasicInfo roomBasicInfo) {
        return roomBasicInfoRepo.save(roomBasicInfo);
    }
}
