package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Products;
import com.app.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	
	@Autowired
	private ProductRepository productRepo;
	@Override
	public String addProduct(Products product) {
		// TODO Auto-generated method stub
		productRepo.save(product);
		return "product saved";
	}
	
	
	@Override
	public List<Products> getAllProducts() {
		// TODO Auto-generated method stub
		
		List<Products> prod = productRepo.findAll();
		return prod;
	}


	@Override
	public String removeProduct(int id) {
		// TODO Auto-generated method stub
		productRepo.deleteById(id);
		return "Product deleted successfully....";
	}


	@Override
	public Products getProductById(int id) {
		// TODO Auto-generated method stub
		return productRepo.findById(id).orElseThrow();
	}


	@Override
	public Products editProductDetails(Products product) {
		// TODO Auto-generated method stub
		return productRepo.save(product);
	}


	@Override
	public List<Products> searchAllProductsByName(String name) {
		// TODO Auto-generated method stub
		return productRepo.findByName(name);
	}


	@Override
	public List<Products> productsByCategory(String name) {
		// TODO Auto-generated method stub
		List<Products> product = productRepo.findByCategoryCategoryName(name);
		return product;
	}


	@Override
	public List<Products> productsByBrand(String name) {
		// TODO Auto-generated method stub
		List<Products> products = productRepo.findByBrand(name);
		return products;
	}


	

}
