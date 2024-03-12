package com.app.service;

import java.util.List;

import com.app.entity.Cart;

public interface CartService {

	List<Cart> getCartProducts(String name);

	String removeCartProduct(int id);

	String increaseQuantity(int id);

	String decreaseQuantity(int id);

}
