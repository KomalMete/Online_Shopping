package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Cart;
import com.app.entity.Customer;
import com.app.entity.Products;

@Repository
public interface CartRepository extends JpaRepository<Cart, Integer> {

	List<Cart> findByCustomer(Customer customer);
	
	Cart findByProductId(int in);
}
