package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excceptions.ResourceNotFoundException;
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
	public List<Cart> getCartProducts(String name) {
		// TODO Auto-generated method stub
		Customer customer = customerRepo.findByCustomerEmail(name);
		
		return cartRepo.findByCustomer(customer);
	}

	@Override
	public String removeCartProduct(int id) {
		
		
		Optional<Cart> cartItem = cartRepo.findById(id);
		
		if (cartItem.isPresent()) {
            //throw new ResourceNotFoundException("Product not found in the cart");
			 Cart cartItem1 = cartItem.get();
			 cartRepo.delete(cartItem1);
			  return "Product removed from cart successfully...";
        }
		else
		{
			throw new ResourceNotFoundException("Product not found in the cart");
			
		}
       
	}

	@Override
	public String increaseQuantity(int id) {
		// TODO Auto-generated method stub
		
		Optional<Cart> cart = cartRepo.findById(id);
	
		if(cart.isPresent())
		{
			Cart cart1 = cart.get();
			cart1.setQuantity(cart1.getQuantity() + 1);
			cartRepo.save(cart1);
			return "quantity increased..";
		}
		else
		{
			return "failed to update..";
		}
		
	}

	@Override
	public String decreaseQuantity(int id) {
		// TODO Auto-generated method stub
		Optional<Cart> cart = cartRepo.findById(id);
		if(cart.isPresent())
		{
			Cart cart1 = cart.get();
			cart1.setQuantity(cart1.getQuantity() - 1);
			cartRepo.save(cart1);
			return "quantity decrease..";
		}
		else
		{
			return "failed to update..";
		}
	}

}
