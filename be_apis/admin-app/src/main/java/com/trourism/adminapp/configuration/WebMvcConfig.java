package com.trourism.adminapp.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class WebMvcConfig implements WebMvcConfigurer {


  @Bean
  public WebMvcConfigurer corsConfigurer() {

    return new WebMvcConfigurer() {
      @Override
      public void addCorsMappings(CorsRegistry registry) {
        //registry.addMapping("/**").allowedOrigins("*").allowedMethods("GET","POST","PUT","OPTIONS","DELETE").allowCredentials(true);
        //registry.addMapping("/api/v1/ui/**").allowedOrigins("*").allowedMethods("GET","POST","PUT","OPTIONS","DELETE").allowCredentials(true);
      }
    };

  }



}