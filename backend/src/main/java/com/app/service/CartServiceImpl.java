package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Cart;
import com.app.entity.Customer;
import com.app.entity.Products;
import com.app.repository.CartRepository;
import com.app.repository.CustomerRepo;
import com.app.repository.ProductRepository;

	
@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepository cartRepo;
	
	@Autowired
	private CustomerRepo customerRepo;
	
	@Autowired
	private ProductRepository productRepo;
	
	@Override
	public List<Cart> getCartProducts(int customerId) {
		// TODO Auto-generated method stub
		Optional<Customer> customer = customerRepo.findById(customerId);
		
		return cartRepo.findByCustomer(customer);
	}

	@Override
	public String removeCartProduct(int id) {
		// TODO Auto-generated method stub
		cartRepo.deleteById(id);
		return "product removed from cart successfully...";
	}

}
