package com.tourism.siteapp.security.state;


import com.tourism.siteapp.security.context.RequestContext;
import com.tourism.siteapp.security.service.RequestUserResolver;
import com.tourism.tourismcore.domain.SiteCustomer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.authentication.RememberMeAuthenticationToken;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.context.HttpSessionSecurityContextRepository;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpSession;

@Component("UserStateRequestProcessor")
public class UserStateRequestProcessor {


    /*@Autowired
    private UserService userService;*/


    public void process(WebRequest request) {
        SiteCustomer user = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if ((authentication != null) && !(authentication instanceof AnonymousAuthenticationToken)) {
            String userName = authentication.getName();
            user = (SiteCustomer) RequestUserResolver.getRequestUserResolver().getUser(request);
            if (userName != null && (user == null || !userName.equals(user.getEmail()))) {
                // can only get here if the authenticated user does not match the user in session
                //user = userService.readUserByUsername(userName);
            }
            if (user != null) {
                if (authentication instanceof RememberMeAuthenticationToken) {
                    // set transient property of customer
                    user.setCookied(true);
                } else if (authentication instanceof UsernamePasswordAuthenticationToken) {
                    user.setLoggedIn(true);
                }
            } else {
                user = null;
            }
        }

        if (user == null && request.getHeader("auth-token") != null) {
            try {
                //user = userService.getUserFromAccessToken(request.getHeader("auth-token"));
                authentication = new UsernamePasswordAuthenticationToken(user.getEmail(), null, AuthorityUtils.createAuthorityList("ROLE_USER"));
                SecurityContext sc = SecurityContextHolder.getContext();
                sc.setAuthentication(authentication);
                HttpSession session = RequestContext.getRequestContext().getRequest().getSession(true);
                session.setAttribute(HttpSessionSecurityContextRepository.SPRING_SECURITY_CONTEXT_KEY, sc);
            }catch (Exception ex){
            }
        }

        UserState.setUser(user);
    }
}
