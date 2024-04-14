package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excceptions.ResourceNotFoundException;
import com.app.entity.Address;
import com.app.entity.Customer;
import com.app.repository.AddressRepository;
import com.app.repository.CustomerRepo;

@Service
public class AddressServiceImpl implements AddressService {

	@Autowired
	private AddressRepository addressRepo;

	@Autowired
	private CustomerRepo customerRepo;

	@Override
	public List<Address> getAllAddressOfCustomer(String email) {
		// TODO Auto-generated method stub
		
			return addressRepo.findByCustomerCustomerEmail(email);
	}

	@Override
	public Address addCustomerAddress(Address address, String name) {
		// TODO Auto-generated method stub
		
		if (address == null) {
	        throw new IllegalArgumentException("Provided address is null");
	    }
		
		Customer cust1 = customerRepo.findByCustomerEmail(name);
		
		if (cust1 == null) {
	        throw new ResourceNotFoundException("Customer not found for email: " + name);
	    }
		
		address.setCustomer(cust1);
		return addressRepo.save(address);
		
		
		
	}
	
	
	
	
}
