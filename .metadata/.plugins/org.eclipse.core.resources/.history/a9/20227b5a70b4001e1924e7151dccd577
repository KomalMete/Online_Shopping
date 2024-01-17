package com.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.entity.Customer;
import com.app.entity.Orders;
import com.app.entity.Products;

@Repository
public interface OrderRepository extends JpaRepository<Orders, Integer> {

	
	List<Orders> findByCustomer(Customer customer);
}
