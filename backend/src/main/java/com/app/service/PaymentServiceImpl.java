package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.entity.Payments;
import com.app.repository.PaymentRepository;

@Service
public class PaymentServiceImpl implements PaymentService {

	
	@Autowired
	private PaymentRepository paymentRepo;
	
	@Override
	public Payments savePayment(Payments payment) {
		// TODO Auto-generated method stub
		payment.setTransactionStatus("Done");
		return paymentRepo.save(payment);
	}

}
