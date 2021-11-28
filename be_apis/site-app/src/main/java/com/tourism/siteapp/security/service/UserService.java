package com.tourism.siteapp.security.service;


import com.tourism.tourismcore.Utils.MediaUtil;
import com.tourism.tourismcore.domain.SiteCustomer;
import com.tourism.tourismcore.domain.SystemProperty;
import com.tourism.tourismcore.domain.TokenRequest;
import com.tourism.tourismcore.dto.ResetPasswordRequest;
import com.tourism.tourismcore.repository.SiteCustomerRepo;
import com.tourism.tourismcore.service.SystemPropertyService;
import org.apache.logging.log4j.util.Strings;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;


@Service
public class UserService {

    @Autowired
    private SiteCustomerRepo userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    @Autowired
    private LoginService loginService;

    @Autowired
    private SystemPropertyService systemPropertyService;

    public SiteCustomer readUserByUsername(String username) {
        return userRepository.readByUserName(username);
    }

    public SiteCustomer readUserById(Integer id){
        return userRepository.fetchCustomerById(id);
    }


    @Transactional
    public SiteCustomer registerUser(TokenRequest tokenRequest) {
        SiteCustomer user = new SiteCustomer();
        user = populateUserFromToken(user,tokenRequest);
        user.setUserName((user.getUserName()!=null && !user.getUserName().isEmpty())? user.getUserName():user.getEmail());
        user.setEmail((user.getEmail()!=null && !user.getEmail().isEmpty())? user.getEmail():user.getUserName());
        user = saveUser(user);
        user.setEmailVerified(false);
        return user;
    }

    private SiteCustomer populateUserFromToken(SiteCustomer user,TokenRequest tokenRequest){
        user.setRegistered(true);
        user.setUserName(tokenRequest.getUserName());
        user.setEmail(tokenRequest.getEmail());
        user.setUnencodedPassword(tokenRequest.getPassword());
        String baseUrl = systemPropertyService.getPropertyByKey(SystemProperty.PropertiesKey.BASE_URL.name());
        if(Strings.isEmpty(user.getAvatar())) {
            user.setAvatar(MediaUtil.getAssetUrl(baseUrl,tokenRequest.getAvatar()));
        }
        user.setFirstName((tokenRequest.getFirstName()!=null && !tokenRequest.getFirstName().isEmpty())?tokenRequest.getFirstName():tokenRequest.getUserName());
        user.setLastName(tokenRequest.getLastName());

        user.setEmailVerified(false);
        return user;
    }

    public SiteCustomer resetPassword (ResetPasswordRequest reset, SiteCustomer user) {
        String hashPassword = passwordEncoder.encode(reset.getNewPassword());
        user.setPassword(hashPassword);
        user = userRepository.save(user);
        loginService.logoutUser();
        return user;
    }

    @Transactional
    public SiteCustomer saveUser(SiteCustomer user) {
        if (user.getUnencodedPassword() != null) {
            user.setPassword(passwordEncoder.encode(user.getUnencodedPassword()));
        }

        return userRepository.save(user);
    }

    public void updateUserProfile(SiteCustomer user, TokenRequest tokenRequest) {
        user = populateUserFromToken(user,tokenRequest);
        saveUser(user);
    }
}
