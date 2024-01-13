package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.SigninRequest;
import com.app.entity.Customer;
import com.app.service.CustomerService;

@RestController
@RequestMapping("/customers")
public class CustomerController {

	@Autowired
	private CustomerService customerService;
	
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
	public ResponseEntity<?> customerLogin(@RequestBody @Valid SigninRequest request)
	{
		return new ResponseEntity<>(customerService.authenticate(request),HttpStatus.OK);
		
	}
	
	
}
