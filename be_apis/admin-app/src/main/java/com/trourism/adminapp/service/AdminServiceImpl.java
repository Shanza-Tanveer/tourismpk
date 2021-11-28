package com.trourism.adminapp.service;

import com.tourism.tourismcore.domain.AdminUser;
import com.tourism.tourismcore.repository.AdminUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminServiceImpl {

    @Autowired
    private AdminUserRepo adminUserRepo;

    public List<AdminUser> getAllActiveAdminUsers ()  {
        return adminUserRepo.findAll();
    }

    public Optional<AdminUser> getUserById (Integer  id) {
        return adminUserRepo.findById(id);
    }

    public AdminUser getUserByUserName (String userName) {
        return adminUserRepo.findByUserByUserName(userName);
    }

    public AdminUser saveUser (AdminUser adminUser) {
        return adminUserRepo.save(adminUser);
    }

    }
