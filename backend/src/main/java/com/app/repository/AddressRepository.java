package com.app.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Address;
import com.app.entity.Category;
import com.app.entity.Customer;

@Repository
public interface AddressRepository extends JpaRepository<Address, Integer>{

	List<Address> findByCustomerCustomerEmail(String mail);
}
