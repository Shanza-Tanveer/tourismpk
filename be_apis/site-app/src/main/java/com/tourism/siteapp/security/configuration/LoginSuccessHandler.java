package com.tourism.siteapp.security.configuration;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.tourism.siteapp.security.context.RequestContext;
import com.tourism.siteapp.security.state.UserState;
import com.tourism.siteapp.security.state.UserStateRequestProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.ServletWebRequest;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class LoginSuccessHandler implements AuthenticationSuccessHandler {

    @Autowired
    private UserStateRequestProcessor userStateRequestProcessor;
    @Autowired
    private ObjectMapper objectMapper;

    @Override
    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, Authentication authentication) throws IOException, ServletException {
        ServletWebRequest webRequest = new ServletWebRequest(httpServletRequest);
        RequestContext.getRequestContext().setWebRequest(webRequest);
        userStateRequestProcessor.process(webRequest);

        httpServletResponse.getWriter().println(objectMapper.writeValueAsString(UserState.getUser()));
        httpServletResponse.setContentType("application/json");
    }
}
