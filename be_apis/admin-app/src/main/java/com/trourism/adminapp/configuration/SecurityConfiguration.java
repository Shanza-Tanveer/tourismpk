package com.trourism.adminapp.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {


	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Autowired
	private DataSource dataSource;

	@Autowired
	private AuthenticationSuccessHandlerDev authenticationSuccessHandlerDev;

	@Qualifier("adminUserDetailService")
	@Autowired
	private UserDetailsService userDetailsService;


	@Override
	protected void configure(AuthenticationManagerBuilder auth)
			throws Exception {

		auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable()
				.authorizeRequests()
				.antMatchers("/login/**","/login","/**.css","/**.js","/**.woff","/**.woff2","/**.ttf", "/cms/**.**", "/cms/getAllMedia", "/assets/**", "/**.png","/**.jpg","/**.jpeg","/**.gif").permitAll()
				.antMatchers("/styles.css").permitAll()
				.antMatchers("/api/v1/ext/**").permitAll()
				.antMatchers("/services/**").permitAll()
				.antMatchers("/api/v1/ui/**").permitAll()
				.antMatchers("/clear-cache").permitAll()
				.antMatchers("/api/v1/dashboard/**").permitAll()
				.antMatchers("/api/v1/theme/**").permitAll()
				.anyRequest().authenticated()
				.and().sessionManagement().enableSessionUrlRewriting(false)
				.and().csrf().disable().formLogin()
				.loginPage("/login").failureUrl("/login?error=true")
				.successHandler(authenticationSuccessHandlerDev)
				.usernameParameter("email")
				.passwordParameter("password")
				.and().logout()
				.deleteCookies("ADMINACTIVEID")
				.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
				.logoutSuccessUrl("/login")
				//.and().rememberMe().key("HTrPdDG9EQ").tokenRepository(persistentTokenRepository()).userDetailsService(userDetailsService)
				.and().exceptionHandling()
				.accessDeniedPage("/access-denied");
	}



	@Override
	public void configure(WebSecurity web) throws Exception {
		web
				.ignoring()
				.antMatchers("/**.woff", "/**.woff2", "/**.ttf", "/**.js", "/**.css", "/resources/**", "/static/**", "/css/**", "/js/**", "/images/**", "/assets/**", "/styles/**", "/scripts/**");
	}

}
