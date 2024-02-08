package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.CartDto;
import com.app.entity.Cart;
import com.app.entity.Category;
import com.app.entity.Customer;
import com.app.entity.Products;
import com.app.repository.CartRepository;
import com.app.repository.CategoryRepository;
import com.app.repository.CustomerRepo;
import com.app.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {

	
	@Autowired
	private ProductRepository productRepo;
	
	@Autowired
	private CustomerRepo customerRepo;
	
	@Autowired
	private CartRepository cartRepo;
	
	@Autowired
	private CategoryRepository categoryRepo;
	
	@Override
	public String addProduct(Products product) {
		// TODO Auto-generated method stub
		 Category category = product.getCategory();
		 
		 Category existingCategory = categoryRepo.findByCategoryName(category.getCategoryName());

		    
		    if (existingCategory == null)
		    {
		        category = categoryRepo.save(category);
		    } else
		    {
		     
		        category = existingCategory;
		    }

	        product.setCategory(category);
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


	@Override
	public String addToCart(CartDto product) {
		// TODO Auto-generated method stub
		
		Products prod1 = getProductById(product.getProductId());
		Customer cust1 = customerRepo.findById(product.getCustomerId()).orElseThrow(() -> new RuntimeException("Customer not found"));
		
		Cart cart = new Cart();
		cart.setProductId(prod1.getProductId());
		cart.setProductName(prod1.getProductName());
		cart.setProductPrice(prod1.getProductPrice());
		cart.setQuantity(prod1.getQuantity());
		cart.setCustomer(cust1);
		cartRepo.save(cart);
		return "Product added successfully to cart..";
	}


	

}
