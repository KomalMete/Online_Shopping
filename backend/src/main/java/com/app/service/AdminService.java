package com.app.service;

import javax.validation.Valid;

import com.app.dto.LoginAdminRequest;

public interface AdminService {

	String authenticateAdmin(@Valid LoginAdminRequest request);

}
