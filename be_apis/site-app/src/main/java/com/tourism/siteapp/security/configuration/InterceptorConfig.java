package com.tourism.siteapp.security.configuration;

import com.tourism.siteapp.security.interceptor.UserStateInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.handler.WebRequestHandlerInterceptorAdapter;


@Configuration
public class InterceptorConfig implements WebMvcConfigurer {



    @Autowired
    private UserStateInterceptor userStateInterceptor;


    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new WebRequestHandlerInterceptorAdapter(userStateInterceptor));
    }
}
