package com.tourism.tourismcore.generator;


import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.persistence.*;
import java.util.Date;

@MappedSuperclass
@Getter
@Setter
public class BasicEntityImpl {

    @Column(name="CREATED_DATE")
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date createdDate;

    @Column(name="LAST_MODIFIED_DATE")
    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date modifiedDate;

    @Column(name="UPDATED_BY")
    private Integer updatedBy;

    @PreUpdate
    public void onPreUpdate() {
        try{
            this.setModifiedDate(new Date());
            Authentication auth = SecurityContextHolder.getContext().getAuthentication();
            if(auth!=null && auth.isAuthenticated() && auth.getPrincipal() instanceof AnonymousAuthenticationToken){
                String userName = auth.getName();
                // TODO: set user id
            }

        }catch (Exception ex){
            ex.printStackTrace();
        }
    }
}
