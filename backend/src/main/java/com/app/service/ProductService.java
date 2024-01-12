package com.app.service;

import java.util.List;

import com.app.entity.Products;


public interface ProductService {

	String addProduct(Products product);

	List<Products> getAllProducts();

	String removeProduct(int id);

	Products getProductById(int id);

	Products editProductDetails(Products product);

	List<Products> searchAllProductsByName(String name);

	List<Products> productsByCategory(int id);

}
