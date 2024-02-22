package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthenticationResponse;
import com.app.dto.LoginDTO;
import com.app.entity.Customer;
import com.app.jwtUtils.JwtUtils;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/customers")
@CrossOrigin(origins = "*")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
	@Autowired
	private AuthenticationManager authManager;
	
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@GetMapping
	public List<Customer> getAllCustomers()
	{
		return customerService.allCustomers();
	}
	
	@PostMapping("/addcustomer")
	public Customer addCustomer(@RequestBody Customer customer)
	{
		return customerService.saveCustomer(customer);
	}
	
	@GetMapping("/searchcustomer/{id}")
	public Customer getCustomerById(@PathVariable int id)
	{
		return customerService.getCustomerById(id);
	}
	
	@DeleteMapping("/removecustomer/{id}")
	public String deleteCustomer(@PathVariable int id)
	{
		return customerService.removeCustomer(id);
	}
	
	@PutMapping("/editcustomer")
	public Customer editDetails(@RequestBody Customer customer)
	{
		return customerService.saveChangeDetails(customer);
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> authenticateUser(@RequestBody LoginDTO request) {
		System.out.println("in auth " + request);
		try {
			Authentication authenticate = authManager.authenticate
			(new UsernamePasswordAuthenticationToken(request.getCustomerEmail(), request.getCustomerPassword()));			
			System.out.println("auth success " + authenticate);
			return ResponseEntity.ok(new AuthenticationResponse(jwtUtils.generateJwtToken(authenticate),authenticate.getAuthorities().toString()));
		} catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("User authentication Failed", e);
		}
	}
	
}
