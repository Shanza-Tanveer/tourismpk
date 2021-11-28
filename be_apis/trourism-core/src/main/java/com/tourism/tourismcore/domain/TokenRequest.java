package com.tourism.tourismcore.domain;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.tourism.tourismcore.generator.GenericIdSuperEntity;
import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name = "sec_token_request")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class TokenRequest extends GenericIdSuperEntity implements Serializable {


    @Column(name = "EMAIL")
    private String email;
    @Column(name = "USERNAME")
    private String userName;
    @Column(name = "PASSWORD")
    private String password;
    @Column(name = "MSN")
    private String msn;
    @Column(name = "DEVICE_ID")
    private String deviceId;
    @Column(name = "MSN_DETECTED")
    private boolean msnDetected;
    @Column(name = "OTP_REQUEST")
    private boolean otpRequest;
    @Column(name = "OTP")
    private String otp;
    @Column(name = "TOKEN")
    private String token;

    @Transient
    private String firstName;
    @Transient
    private String lastName;
    @Transient
    private Date dob;
    @Transient
    private String avatar;
}
