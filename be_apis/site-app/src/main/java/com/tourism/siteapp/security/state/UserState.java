package com.tourism.siteapp.security.state;

import com.tourism.siteapp.security.context.RequestContext;
import com.tourism.siteapp.security.service.RequestUserResolver;
import com.tourism.tourismcore.domain.SiteCustomer;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;

@Component
public class UserState {


    public static SiteCustomer getUser(HttpServletRequest request) {
        return (SiteCustomer) RequestUserResolver.getRequestUserResolver().getUser(request);
    }

    public static SiteCustomer getUser(WebRequest request) {
        return (SiteCustomer) RequestUserResolver.getRequestUserResolver().getUser(request);
    }

    public static SiteCustomer getUser() {
        if (RequestContext.getRequestContext() == null
                || RequestContext.getRequestContext().getWebRequest() == null) {
            return null;
        }
        return (SiteCustomer) RequestUserResolver.getRequestUserResolver().getUser();
    }

    public static void setUser(SiteCustomer user) {
        RequestUserResolver.getRequestUserResolver().setUser(user);
    }

}
