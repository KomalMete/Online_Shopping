package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Customer;
import com.app.entity.Orders;
import com.app.repository.CustomerRepo;
import com.app.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepo;

	@Autowired
	private CustomerRepo customerRepo;


	@Override
	public List<Orders> getOrdersOfCustomer(String name) {
		// TODO Auto-generated method stub
		//String email = customer.getCustomerEmail();
		//Optional<Customer> customer1 = customerRepo.findById(customerId);
		
		return orderRepo.findByCustomer(customerRepo.findByCustomerEmail(name));
	}


	


	

	


	

}
