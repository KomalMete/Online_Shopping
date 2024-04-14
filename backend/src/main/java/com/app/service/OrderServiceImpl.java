package com.app.service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excceptions.ResourceNotFoundException;
import com.app.dto.OrdersDto;
import com.app.entity.Address;
import com.app.entity.Customer;
import com.app.entity.Orders;
import com.app.entity.Payments;
import com.app.repository.AddressRepository;
import com.app.repository.CustomerRepo;
import com.app.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepo;

	@Autowired
	private CustomerRepo customerRepo;

	@Autowired
	private AddressRepository addressRepo;
	
	@Autowired PaymentService paymentService;
	
	@Autowired
	private AddressService addressService;

	@Override
	public List<Orders> getOrdersOfCustomer(String name) {
		// TODO Auto-generated method stub
		//String email = customer.getCustomerEmail();
		//Optional<Customer> customer1 = customerRepo.findById(customerId);
		
		return orderRepo.findByCustomer(customerRepo.findByCustomerEmail(name));
	}


	@Override
	public String placeOrder(OrdersDto order,  String name) {
		// TODO Auto-generated method stub
		Customer customer = customerRepo.findByCustomerEmail(name);
		if(customer == null)
		{
			throw new ResourceNotFoundException("Customer not found");
		}
		
		//Address address = addressRepo.save(order.getAddress());
		Address address = addressService.addCustomerAddress(order.getAddress(), name);
		Payments payment = paymentService.savePayment(order.getPayment());
		Orders ord = new Orders();
		ord.setAddress(address);
		ord.setCustomer(customer);
		ord.setPaymentId(payment);
		ord.setOrderStatus("Done");
		orderRepo.save(ord);
		
		
		
		
//		Payments payment = new Payments();
//		payment.setPaymentId(customer.getCustomerId()+10);
//		payment.setTransactionStatus("Done");
//        	//order.setPaymentId(customer.getCustomerId()+10);
//        	order.setPaymentId(payment);
//
//			order.setCustomer(customer);
//			order.setAddress(address);
//			order.setOrderStatus("Done");
//			orderRepo.save(order);
//			
			return "Order place successfully";
		
		
	}


	


	


	

	


	

}
