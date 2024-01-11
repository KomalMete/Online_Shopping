package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Customer;
import com.app.repository.CustomerRepo;

@Service
public class CustomerServiceImpl implements CustomerService {

	@Autowired
	private CustomerRepo customerRepo;
	
	@Override
	public List<Customer> allCustomers() {
		// TODO Auto-generated method stub
		return customerRepo.findAll();
	}
	
	@Override
	public Customer saveCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerRepo.save(customer);
	}

	@Override
	public Customer getCustomerById(int id) {
		// TODO Auto-generated method stub
		return customerRepo.findById(id).orElseThrow();
	}

	@Override
	public String removeCustomer(int id) {
		// TODO Auto-generated method stub
		customerRepo.deleteById(id);
		
		return "Customer deleted successfully...";
	}

}
