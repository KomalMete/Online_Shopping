package com.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.entity.Payments;

@Repository
public interface PaymentRepository extends JpaRepository<Payments, Integer> {

}
