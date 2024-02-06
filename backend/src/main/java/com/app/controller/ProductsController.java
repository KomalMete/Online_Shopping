package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartDto;
import com.app.entity.Products;
import com.app.service.ProductService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/products")
public class ProductsController {
//http://localhost:3000
	@Autowired
	private ProductService productService;
	
	@PostMapping("/addproduct")
	public String saveProduct(@RequestBody Products product)
	{
		return productService.addProduct(product);
		//return Response.success("product saved");
		
	}
	
	@GetMapping
	public List<Products> fetchAllProducts()
	{
		return productService.getAllProducts();
		
	}
	
	@DeleteMapping("/removeproduct/{id}")
	public String deleteProduct(@PathVariable int id)
	{
		return productService.removeProduct(id);
	}
	
	@GetMapping("/getproduct/{id}")
	public Products getProductById(@PathVariable int id)
	{
		return productService.getProductById(id);
	}
	
	@PutMapping("/editproduct")
	public Products editProduct(@RequestBody Products product)
	{
		return productService.editProductDetails(product);
		
	}
	
	//search product by name
	@GetMapping("/searchproduct/{name}")
	public List<Products> getAllProductsByName(@PathVariable String name)
	{
		return productService.searchAllProductsByName(name);
	}
	
	@GetMapping("/getproducts/{categoryname}")
	public List<Products> getByCategory(@PathVariable String categoryname)
	{
		return productService.productsByCategory(categoryname);
	}
	
	@GetMapping("{brandname}")
	public List<Products> getByBrand(@PathVariable String brandname)
	{
		return productService.productsByBrand(brandname);
	}
	
	@PostMapping("/addtocart")
	public ResponseEntity<?> addToCart(@RequestBody CartDto product)
	{
		System.out.println("in add");
		return new ResponseEntity<>(productService.addToCart(product), HttpStatus.OK);
	}
}
