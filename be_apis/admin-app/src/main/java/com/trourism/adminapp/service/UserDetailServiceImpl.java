package com.trourism.adminapp.service;

import com.tourism.tourismcore.domain.AdminUser;
import com.tourism.tourismcore.dto.UserDetailDto;
import com.tourism.tourismcore.repository.AdminUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service("adminUserDetailService")
public class UserDetailServiceImpl implements UserDetailsService {

    @Autowired
    private AdminUserRepo userRepository;

    @Override
    public UserDetails loadUserByUsername(String userName) throws UsernameNotFoundException {

        AdminUser byUserName = userRepository.fetchUserByUserName(userName);

        if (byUserName == null)
            throw new UsernameNotFoundException("User name not found");

        UserDetailDto userDetailDto = new UserDetailDto(byUserName);

        return userDetailDto;
    }
}
