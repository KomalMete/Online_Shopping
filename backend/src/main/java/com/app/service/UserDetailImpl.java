package com.app.service;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import com.app.entity.Customer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;



@Service
public class UserDetailImpl implements UserDetails {
	
	
	private static final long serialVersionUID = 1L;

	
	private final Customer customer;
	
	public UserDetailImpl(Customer user) {
		super();
		this.customer=user;
	}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		
		List<GrantedAuthority> grantedAuthorities=new ArrayList<GrantedAuthority>();
		grantedAuthorities.add(new SimpleGrantedAuthority("ROLE_"+this.customer.getRole().toUpperCase()));
//		System.out.println("inside details impl "+grantedAuthorities.get(0).getAuthority());
		return grantedAuthorities;
	}

	@Override
	public String getPassword() {
		
		return this.customer.getCustomerPassword();
	}

	@Override
	public String getUsername() {
		
		return this.customer.getCustomerEmail();
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
	        return customer;
	    }

}