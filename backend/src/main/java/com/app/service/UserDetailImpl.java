package com.app.service;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import com.app.entity.Customer;




@Service
public class UserDetailImpl implements UserDetails {
	
	
	private static final long serialVersionUID = 1L;

	private Customer user;
	
	public UserDetailImpl(Customer user) {
		super();
		this.user=user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		
		List<GrantedAuthority> grantedAuthorities=new ArrayList<GrantedAuthority>();
		grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_"+this.user.getRole().toUpperCase()));
//		System.out.println("inside details impl "+grantedAuthorities.get(0).getAuthority());
		return grantedAuthorities;
	}

	@Override
	public String getPassword() {
		
		return this.user.getCustomerPassword();
	}

	@Override
	public String getUsername() {
		
		return this.user.getCustomerEmail();
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
	
	 public Customer getUserDetails() {
	        return user;
	    }

}