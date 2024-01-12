package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Category;
import com.app.repository.CategoryRepository;

@Service
public class CategoryServiceImpl implements CategoryService {

	@Autowired
	private CategoryRepository categoryRepo;
	
	@Override
	public List<Category> getCategories() {
		// TODO Auto-generated method stub
		return categoryRepo.findAll();
	}

	@Override
	public Object addCategory(Category category) {
		// TODO Auto-generated method stub
		return categoryRepo.save(category);
	}

}
