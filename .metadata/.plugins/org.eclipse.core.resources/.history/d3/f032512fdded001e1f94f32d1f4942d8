package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.entity.Customer;
import com.app.jwtUtils.JwtUtils;
import com.app.repository.CustomerRepo;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

	@Autowired
	private CustomerRepo customerRepo;
	
	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private PasswordEncoder passwordEncoder;

   
    
	public UserDetailsServiceImpl(CustomerRepo customerRepo, JwtUtils jwtUtils) {
       
        
        this.customerRepo = customerRepo;
        this.jwtUtils = jwtUtils;
    }
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		Customer customer = customerRepo.findByCustomerEmail(username);
		
		if(customer == null)
		{
			throw new UsernameNotFoundException(username+ "not found...");
		}
		
		String encodedPassword = passwordEncoder.encode(customer.getCustomerPassword());
		UserDetails userDetails = User.withUsername(customer.getCustomerEmail())
				.password(encodedPassword)
                .roles("CUSTOMER") // You can set roles based on your application's logic
                .build();
        
        return userDetails;
	}



}
