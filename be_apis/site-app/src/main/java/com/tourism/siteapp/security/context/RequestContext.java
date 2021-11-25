package com.tourism.siteapp.security.context;

import com.tourism.siteapp.common.ThreadLocalManager;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class RequestContext {

    protected static final Log LOG = LogFactory.getLog(RequestContext.class);

    private static final ThreadLocal<RequestContext> REQUEST_CONTEXT = ThreadLocalManager.createThreadLocal(RequestContext.class);

    @Autowired
    protected WebRequest webRequest;
    protected HttpServletRequest request;
    protected HttpServletResponse response;

    public static RequestContext getRequestContext() {
        return REQUEST_CONTEXT.get();
    }

    public static void setRequestContext(RequestContext RequestContext) {
        REQUEST_CONTEXT.set(RequestContext);
    }

    public WebRequest getWebRequest() {
        return webRequest;
    }

    public void setWebRequest(WebRequest webRequest) {
        this.webRequest = webRequest;
        if (webRequest instanceof ServletWebRequest) {
            this.request = ((ServletWebRequest) webRequest).getRequest();
            setResponse(((ServletWebRequest) webRequest).getResponse());
        }
    }

    public void setResponse(HttpServletResponse response) {
        this.response = response;
    }

    public HttpServletRequest getRequest() {
        return request;
    }

}
