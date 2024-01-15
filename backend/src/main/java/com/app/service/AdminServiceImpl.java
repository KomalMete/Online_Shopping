package com.app.service;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_excceptions.ResourceNotFoundException;
import com.app.dto.LoginAdminRequest;
import com.app.entity.Admin;
import com.app.entity.Customer;
import com.app.repository.AdminRepository;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private AdminRepository adminRepo;
	
	@Override
	public String authenticateAdmin(@Valid LoginAdminRequest request) {
		// TODO Auto-generated method stub
		Admin admin = adminRepo.findByAdminEmailAndAdminPassword
				(request.getAdminEmail(), request.getAdminPassword())
				.orElseThrow(() -> new ResourceNotFoundException("Bad Credentials , Invalid Login!!!!!!!!!!!!!"));
		
		return "Login successful...";
	}

}
