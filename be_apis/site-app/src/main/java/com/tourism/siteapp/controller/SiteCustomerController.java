package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.SiteCustomer;
import com.tourism.tourismcore.repository.SiteCustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/siteCustomer")
public class SiteCustomerController {

    @Autowired
    private SiteCustomerRepo siteCustomerRepo;

    @GetMapping
    public List<SiteCustomer> findAllSiteCustomer() {
        return siteCustomerRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<SiteCustomer> findSiteCustomerById(@PathVariable(value = "id") Integer id) {
        Optional<SiteCustomer> siteCustomer = siteCustomerRepo.findById(id);

        if(siteCustomer.isPresent()) {
            return ResponseEntity.ok().body(siteCustomer.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public SiteCustomer siteCustomer(@Validated @RequestBody SiteCustomer siteCustomer) {
        String isError = validateSiteCustomer(siteCustomer);

        if (Strings.isBlank(isError)) {
            // return isError;
        }
        return siteCustomerServiceImpl.saveSiteCustomer(siteCustomer);
    }

    private String validateSiteCustomer(SiteCustomer siteCustomer) {
        if (Strings.isBlank(siteCustomer.getFirstName())) {
            return "SiteCustomer firstName is mandatory";
        }

        if (Strings.isBlank(siteCustomer.getMiddleName())) {
            return "SiteCustomer middleName is mandatory";
        }

        if (Strings.isBlank(siteCustomer.getLastName())) {
            return "SiteCustomer lastName is mandatory";
        }

        if (Strings.isBlank(siteCustomer.getDateOfBirth())) {
            return "SiteCustomer dateOfBirth is mandatory";
        }

        if (Strings.isBlank(siteCustomer.getPhoneNumber())) {
            return "SiteCustomer phoneNumber is mandatory";
        }

        if (Strings.isBlank(siteCustomer.getEmail())) {
            return "SiteCustomer email is mandatory";
        }

        if (Strings.isBlank(siteCustomer.getPassword())) {
            return "SiteCustomer password is mandatory";
        }

        if (Strings.isBlank(siteCustomer.getLoginIp())) {
            return "SiteCustomer loginIp is mandatory";
        }

        if (Strings.isBlank(siteCustomer.getEmailVerified())) {
            return "SiteCustomer emailVerified is mandatory";
        }
        return null;
    }
}
