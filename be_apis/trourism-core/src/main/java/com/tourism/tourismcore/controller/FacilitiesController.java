package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.Facilities;
import com.tourism.tourismcore.repository.FacilitiesRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/facilities")
public class FacilitiesController {

    @Autowired
    private FacilitiesRepo facilitiesRepo;

    @GetMapping
    public List<Facilities> findAllFacilities() {
        return facilitiesRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Facilities> findFacilitiesById(@PathVariable(value = "id") Integer id){
        Optional<Facilities> facilities = facilitiesRepo.findById(id);

        if(facilities.isPresent()) {
            return ResponseEntity.ok().body(facilities.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Facilities saveFacilities(@Validated @RequestBody Facilities facilities) {
        return facilitiesRepo.save(facilities);
    }
}
