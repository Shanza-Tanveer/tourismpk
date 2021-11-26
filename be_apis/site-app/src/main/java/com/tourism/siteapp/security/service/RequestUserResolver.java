package com.tourism.siteapp.security.service;

import com.tourism.siteapp.security.context.RequestContext;
import com.tourism.tourismcore.domain.SiteCustomer;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.BeansException;
import org.springframework.context.ApplicationContext;
import org.springframework.context.ApplicationContextAware;
import org.springframework.stereotype.Service;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;

@Service("requestUserResolver")
public class RequestUserResolver implements ApplicationContextAware {

    private static final Log LOG = LogFactory.getLog(RequestUserResolver.class);

    private static ApplicationContext applicationContext;

    protected static String userRequestAttributeName = "user";


    public Object getUser(HttpServletRequest request) {
        return getUser(new ServletWebRequest(request));
    }


    public Object getUser() {
        WebRequest request = RequestContext.getRequestContext().getWebRequest();
        return getUser(request);
    }


    public Object getUser(WebRequest request) {
        return request.getAttribute(userRequestAttributeName, WebRequest.SCOPE_SESSION);
    }


    public void setUser(Object user) {
        WebRequest request = RequestContext.getRequestContext().getWebRequest();
        SiteCustomer temp = (SiteCustomer) user;
        //LOG.debug("Setting user with email " + temp.getEmail() + " FOR REQUEST URI " + request.getDescription(true));
        request.setAttribute(userRequestAttributeName, user, WebRequest.SCOPE_SESSION);
    }

    @Override
    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
        RequestUserResolver.applicationContext = applicationContext;
    }

    public static RequestUserResolver getRequestUserResolver() {
        return (RequestUserResolver) applicationContext.getBean("requestUserResolver");
    }
}
