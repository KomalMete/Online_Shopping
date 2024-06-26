package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.Category;
import com.app.service.CategoryService;

@RestController
@RequestMapping("/categories")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;
	
	@GetMapping
	public List<Category> getAllCategories()
	{
		return categoryService.getCategories();
	}
	
	@PostMapping("/addcategory")
	public ResponseEntity<?> addCategory(@RequestBody Category category)
	{
		return new ResponseEntity<>(categoryService.addCategory(category),HttpStatus.OK);
		
	}
	
	@PutMapping("/editcategory")
	public ResponseEntity<?> editCategory(@RequestBody Category category)
	{
		return new ResponseEntity<>(categoryService.editCategory(category),HttpStatus.OK);
		
	}
	
	@DeleteMapping("/remove/{id}")
	public ResponseEntity<?> deleteCategory(@PathVariable int id)
	{
		return new ResponseEntity<>(categoryService.removeCategory(id), HttpStatus.OK);
	}
}
