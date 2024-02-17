package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.app.entity.Customer;
import com.app.repository.CustomerRepo;

public class UserServiceImpl implements UserDetailsService {

	@Autowired
	private CustomerRepo customerRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Customer customer = customerRepo.findByCustomerEmail(username);
		
		if(customer == null)
		{
			throw new UsernameNotFoundException(username+ "not found...");
		}
		UserDetails userDetails = User.withUsername(customer.getCustomerEmail())
                .password(customer.getCustomerPassword())
                .roles("CUSTOMER") // You can set roles based on your application's logic
                .build();
        
        return userDetails;
	}

}
