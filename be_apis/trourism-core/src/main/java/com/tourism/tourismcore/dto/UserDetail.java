package com.tourism.tourismcore.dto;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.util.Collection;

public class UserDetail extends User {


    private static final long serialVersionUID = -6143995442501368301L;

    protected Integer id;

    public UserDetail(Integer id, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        this(id, username, password, true, true, true, true, authorities);
    }

    public UserDetail(Integer id, String username, String password, boolean enabled, boolean accountNonExpired, boolean credentialsNonExpired, boolean accountNonLocked, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, enabled, accountNonExpired, credentialsNonExpired, accountNonLocked, authorities);
        this.id = id;
    }

    public UserDetail withId(Integer id) {
        setId(id);
        return this;
    }

    /**
     * @return the primary key of the Customer
     */
    public Integer getId() {
        return id;
    }

    /**
     * @param id the primary key of the Customer
     */
    public void setId(Integer id) {
        this.id = id;
    }
}
