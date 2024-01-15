package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	
	
	
}
