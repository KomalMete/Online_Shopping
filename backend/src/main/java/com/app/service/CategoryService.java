package com.app.service;

import java.util.List;

import com.app.entity.Category;

public interface CategoryService {

	List<Category> getCategories();
	Object addCategory(Category category);
	String editCategory(Category category);
	String removeCategory(int id);

}
