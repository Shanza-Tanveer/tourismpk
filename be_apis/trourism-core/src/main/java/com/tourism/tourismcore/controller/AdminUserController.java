package com.tourism.tourismcore.controller;

import com.tourism.tourismcore.domain.AdminUser;
import com.tourism.tourismcore.repository.AdminUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/adminUser")
public class AdminUserController {

    @Autowired
    private AdminUserRepo adminUserRepo;

    @GetMapping
    public List<AdminUser> findAllAdminUser() {

        return adminUserRepo.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AdminUser> findAdminUserById(@PathVariable(value = "id") Integer id){
        Optional<AdminUser> adminUser = adminUserRepo.findById(id);

        if(adminUser.isPresent()) {
            return ResponseEntity.ok().body(adminUser.get());
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public AdminUser saveUser(@Validated @RequestBody AdminUser adminUser){
        return adminUserRepo.save(adminUser);
    }
}

