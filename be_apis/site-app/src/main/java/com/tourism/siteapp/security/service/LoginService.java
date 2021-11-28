package com.tourism.siteapp.security.service;

import com.tourism.siteapp.security.context.RequestContext;
import com.tourism.siteapp.security.state.UserStateRequestProcessor;
import com.tourism.tourismcore.domain.SiteCustomer;
import com.tourism.tourismcore.domain.TokenRequest;
import com.tourism.tourismcore.repository.SiteCustomerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.text.ParseException;
import java.util.Objects;

import static org.springframework.security.web.context.HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY;

@Service
public class LoginService {

    @Resource(name = "authenticationManager")
    private AuthenticationManager authenticationManager;

    @Resource(name = "cstUserDetailsService")
    private UserDetailsService userDetailsService;

    @Autowired
    private SiteCustomerRepo userRepository;

    @Autowired
    private UserService userService;

    @Resource(name = "UserStateRequestProcessor")
    private UserStateRequestProcessor userStateRequestProcessor;


    public SiteCustomer processLogin(HttpServletRequest request, TokenRequest tokenRequest) throws ParseException {
        String username = tokenRequest.getUserName();
        String clearTextPassword = tokenRequest.getPassword();
        SiteCustomer user = userRepository.readByUserName(username);

        if (Objects.nonNull(user)) {
            userService.updateUserProfile(user,tokenRequest);
            loginUser(request, username, clearTextPassword);
        } else {
            user = userService.registerUser(tokenRequest);
            loginUser(request, username, clearTextPassword);
        }
        return user;
    }


    public Authentication   loginUser(HttpServletRequest request, String username, String clearTextPassword) {
        UserDetails principal = userDetailsService.loadUserByUsername(username);
        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(principal, clearTextPassword, principal.getAuthorities());
        Authentication authentication = authenticationManager.authenticate(token);
        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(authentication);
        HttpSession session = request.getSession(true);
        session.setAttribute(SPRING_SECURITY_CONTEXT_KEY, sc);
        userStateRequestProcessor.process(new ServletWebRequest(request));
        return authentication;
    }

    public Authentication sessionForMobileUser(HttpServletRequest request, String username) {
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, AuthorityUtils.createAuthorityList("ROLE_USER"));
        SecurityContext sc = SecurityContextHolder.getContext();
        sc.setAuthentication(authentication);
        HttpSession session = request.getSession(true);
        session.setAttribute(SPRING_SECURITY_CONTEXT_KEY, sc);
        return authentication;
    }


    public void logoutUser() {
        SecurityContextHolder.getContext().setAuthentication(null);
        userStateRequestProcessor.process(getWebRequest());
    }

    protected WebRequest getWebRequest() {
        return RequestContext.getRequestContext().getWebRequest();
    }

}
