package com.app.service;

import java.util.List;

import com.app.entity.Customer;


public interface CustomerService {

	List<Customer> allCustomers();

	Customer saveCustomer(Customer customer);

	Customer getCustomerById(int id);

	String removeCustomer(int id);

	Customer saveChangeDetails(Customer customer);

	

}
