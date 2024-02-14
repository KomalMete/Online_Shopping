package com.app.config;

import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@SuppressWarnings("deprecation")
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable()
		.authorizeRequests()
		.antMatchers("/customer/**").hasRole("CUSTOMER")
		.antMatchers("/Vender/**").hasAnyRole("VENDOR")
		.antMatchers("/admin/**").hasAnyRole("ADMIN")
		.antMatchers(HttpMethod.OPTIONS, "/**").permitAll();
	}
}
