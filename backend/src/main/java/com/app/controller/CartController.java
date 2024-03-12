package com.app.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.CartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "*")
public class CartController {

	@Autowired
	private CartService cartService;
	
	@GetMapping("getcartproducts")
	public ResponseEntity<?> getCartProducts(HttpServletRequest request)
	{
		return new ResponseEntity<>(cartService.getCartProducts(request.getUserPrincipal().getName()), HttpStatus.OK);
	}
	
	@DeleteMapping("/deleteproductfromcart/{id}")
	public ResponseEntity<?> removeFromCart(@PathVariable int id)
	{
		return new ResponseEntity<>(cartService.removeCartProduct(id), HttpStatus.OK);
		
	}
	
	@PutMapping("/increasequantity/{id}")
	public ResponseEntity<?> increaseQuantity(@PathVariable int id)
	{
		return new ResponseEntity<>(cartService.increaseQuantity(id), HttpStatus.OK);
		
	}
	
	@PutMapping("/decreasequantity/{id}")
	public ResponseEntity<?> decreaseQuantity(@PathVariable int id)
	{
		return new ResponseEntity<>(cartService.decreaseQuantity(id), HttpStatus.OK);
		
	}
}
