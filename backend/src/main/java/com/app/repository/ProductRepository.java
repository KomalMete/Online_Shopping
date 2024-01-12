package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.Products;

@Repository
public interface ProductRepository extends JpaRepository<Products, Integer> {

	@Query(value = "select p from Products p where productName LIKE ?1")
	List<Products> findByName(String name);
	
	List<Products> findByCategoryCategoryId(int id);
}
