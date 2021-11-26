package com.tourism.tourismcore.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.tourism.tourismcore.domain.AdminUser;
import com.tourism.tourismcore.domain.AppPermission;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
@Setter
public class UserDetailDto implements UserDetails {

    AdminUser appUser;

    @JsonIgnore
    List<GrantedAuthority> permissions = new ArrayList<>();

    public UserDetailDto(AdminUser appUser){
        this.appUser = appUser;
        if(this.appUser!=null)
            initPermissions();
    }

    private void initPermissions() {
        this.appUser.getRole().getPermissions().forEach(appPermission -> {
            permissions.add(convertPermission(appPermission));
        });
    }

    private GrantedAuthority convertPermission(AppPermission appPermission) {

        GrantedAuthority authority = new SimpleGrantedAuthority(appPermission.getPermissionName());

        return authority;
    }

    @JsonIgnore
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return permissions;
    }

    @JsonIgnore
    @Override
    public String getPassword() {
        return appUser.getPassword();
    }

    @Override
    public String getUsername() {
        return appUser.getUserName();
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
