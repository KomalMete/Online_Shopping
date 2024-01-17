package com.app.controller;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Customer;
import com.app.entity.Orders;
import com.app.service.CustomerService;
import com.app.service.OrderService;

@RestController
@RequestMapping("/orders")
public class OrderController {

	@Autowired
	private OrderService orderService;
	
	@Autowired
	private CustomerService customerService;
	
	@GetMapping
	public ResponseEntity<?> getAllOrdersByCustomerId(Optional<Integer> customerId)
	{
		return new ResponseEntity<>(orderService.getAllOrdersOfCustomer(customerId),HttpStatus.OK);
		
	}
	
}
