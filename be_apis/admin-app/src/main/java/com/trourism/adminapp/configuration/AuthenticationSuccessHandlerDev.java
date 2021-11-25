package com.trourism.adminapp.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class AuthenticationSuccessHandlerDev implements org.springframework.security.web.authentication.AuthenticationSuccessHandler {

    @Autowired
    ObjectMapper mapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {

        if (httpServletRequest.getHeader("host").contains("localhost") && httpServletRequest.getRemotePort()==4200){
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            if(auth.isAuthenticated()){
                UserDetails user = (UserDetails) auth.getPrincipal();
                if (mapper==null)
                    mapper = new ObjectMapper();

                String response = mapper.writeValueAsString(user);
                httpServletResponse.getWriter().println(response);
                httpServletResponse.setContentType("application/json");
            }

        }
        else
            httpServletResponse.sendRedirect("/");

    }
}
