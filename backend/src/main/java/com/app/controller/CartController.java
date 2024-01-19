package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService cartService;
	
	@GetMapping("getcartproducts/{customerId}")
	public ResponseEntity<?> getCartProducts(@PathVariable int customerId)
	{
		return new ResponseEntity<>(cartService.getCartProducts(customerId), HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteproductfromcart/{id}")
	public ResponseEntity<?> removeFromCart(@PathVariable int id)
	{
		return new ResponseEntity<>(cartService.removeCartProduct(id), HttpStatus.OK);
		
	}
}