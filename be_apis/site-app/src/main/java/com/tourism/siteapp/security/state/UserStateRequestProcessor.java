package com.tourism.siteapp.security.state;


import org.springframework.stereotype.Component;
import org.springframework.web.context.request.WebRequest;

@Component("UserStateRequestProcessor")
public class UserStateRequestProcessor {


   /* @Autowired
    private UserService userService;*/


    public void process(WebRequest request) {
        /*User user = null;
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if ((authentication != null) && !(authentication instanceof AnonymousAuthenticationToken)) {
            String userName = authentication.getName();
            user = (User) RequestUserResolver.getRequestUserResolver().getUser(request);
            if (userName != null && (user == null || !userName.equals(user.getUserName()))) {
                // can only get here if the authenticated user does not match the user in session
                user = userService.readUserByUsername(userName);
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
                user = userService.getUserFromAccessToken(request.getHeader("auth-token"));
                authentication = new UsernamePasswordAuthenticationToken(user.getUserName(), null, AuthorityUtils.createAuthorityList("ROLE_USER"));
                SecurityContext sc = SecurityContextHolder.getContext();
                sc.setAuthentication(authentication);
                HttpSession session = RequestContext.getRequestContext().getRequest().getSession(true);
                session.setAttribute(SPRING_SECURITY_CONTEXT_KEY, sc);
            }catch (Exception ex){
            }
        }

        UserState.setUser(user);*/
    }
}
