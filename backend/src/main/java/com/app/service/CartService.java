package com.app.service;

import java.util.List;

import com.app.entity.Cart;

public interface CartService {

	List<Cart> getCartProducts(int customerId);

	String removeCartProduct(int id);

}