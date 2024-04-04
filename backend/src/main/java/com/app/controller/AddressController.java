package com.app.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Address;
import com.app.service.AddressService;

@RestController
@RequestMapping("/address")
public class AddressController {

	@Autowired
	private AddressService addressService;
	
	@GetMapping("{email}")
	public ResponseEntity<?> getAllAddress(@PathVariable String email)
	{
		return new ResponseEntity<>(addressService.getAllAddressOfCustomer(email), HttpStatus.OK);
	}
	
	@PostMapping("/addaddress")
	public ResponseEntity<?> addAddress(@RequestBody Address address, HttpServletRequest request)
	{
		//not done
		return new ResponseEntity<>(addressService.addCustomerAddress(address,request.getUserPrincipal().getName()), HttpStatus.OK);
		
	}
}
