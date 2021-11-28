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

        String isError = validateFacilities(facilities);

        if (Strings.isBlank(isError)) {
            //return isError;
        }
        return facilitiesServiceImpl.saveFacilities(facilities);
    }
    private String validateFacilities (Facilities facilities) {

        if(Strings.isBlank(facilities.getName())) {
            return "Facilities name is mandatory";
        }

        if(Strings.isBlank(facilities.getStatus())) {
            return "Facilities status is mandatory";
        }
        return null;

        if ( facilities.getId() == null || facilities.getId() == 0) {
            return isError;
        }
    }
}

