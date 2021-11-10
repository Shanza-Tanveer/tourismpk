package tourismpk.tourismpk.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tourismpk.tourismpk.domain.SiteCustomer;
import tourismpk.tourismpk.repository.SiteCustomerRepo;

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
    public SiteCustomer saveSiteCustomer(@Validated @RequestBody SiteCustomer siteCustomer) {
        return siteCustomerRepo.save(siteCustomer);
    }
}
