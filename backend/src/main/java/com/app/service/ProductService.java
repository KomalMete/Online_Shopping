package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.dto.CartDto;
import com.app.entity.Products;


public interface ProductService {

	String addProduct(Products product,MultipartFile pic) throws IOException;

	List<Products> getAllProducts();

	String removeProduct(int id);

	Products getProductById(int id);

	Products editProductDetails(Products product);

	List<Products> searchAllProductsByName(String name);

	List<Products> productsByCategory(String name);

	List<Products> productsByBrand(String name);

	String addToCart(CartDto product, String name);

}
