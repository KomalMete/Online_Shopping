package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.dto.OrdersDto;
import com.app.entity.Customer;
import com.app.entity.Orders;

public interface OrderService {

	List<Orders> getOrdersOfCustomer(String name);

	String placeOrder(OrdersDto order, String name);

	

	

	

	

	

}
