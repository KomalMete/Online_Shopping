package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class LoginAdminRequest {

	@Column(length = 25,unique = true)
	@Email(message ="invalid email format")
	@NotEmpty(message = "email cannot be null")
	private String adminEmail;
	
	@Column(length = 100)
	@NotEmpty(message = "password required")
	private String adminPassword;
}
