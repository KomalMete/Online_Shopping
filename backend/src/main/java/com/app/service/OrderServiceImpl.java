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
	public List<Orders> getAllOrdersOfCustomer(Optional<Integer> customerId) {
		// TODO Auto-generated method stub
		
		if(customerId.isPresent())
		{
			Optional<Customer> customer = customerRepo.findById(customerId.get());
			return orderRepo.findByCustomer(customer);
		}
		else
		{
			return null;
		}
	
	}

	

	


	

}
