package com.tourism.siteapp.security.interceptor;

import com.tourism.siteapp.security.context.RequestContext;
import com.tourism.siteapp.security.state.UserStateRequestProcessor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.ui.ModelMap;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.context.request.WebRequestInterceptor;

@Component
public class UserStateInterceptor implements WebRequestInterceptor {

    @Autowired
    private UserStateRequestProcessor userStateRequestProcessor;


    @Override
    public void preHandle(WebRequest webRequest) {
        RequestContext.getRequestContext().setWebRequest(webRequest);
        userStateRequestProcessor.process(webRequest);
    }

    @Override
    public void postHandle(WebRequest webRequest, ModelMap modelMap) {
        //unimplemented
    }

    @Override
    public void afterCompletion(WebRequest webRequest, Exception e) {
        //unimplemented
    }
}
