package com.trourism.adminapp.controller;

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

    @GetMapping("/{userName}")
    public ResponseEntity<AdminUser> findAdminUserByString(@PathVariable(value = "userName") String userName){

        return ResponseEntity.ok().body(adminServiceImpl.getUserByUserName(userName));
    }

    @PostMapping
    public AdminUser saveUser(@Validated @RequestBody AdminUser adminUser){

        String isError = validateAdminUser(adminUser);

        if (Strings.isBlank(isError)) {
            // return isError;
        }

        return adminServiceImpl.saveUser(adminUser);
    }
    private String validateAdminUser (AdminUser adminUser) {
        if (Strings.isBlank(adminUser.getUserName())) {
            return "User name is mandatory";
        }
        if (Strings.isBlank(adminUser.getEmail())) {
            return "Email is mandatory";
        }
        return null;
    }
}

