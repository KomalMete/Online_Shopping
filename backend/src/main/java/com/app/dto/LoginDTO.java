package com.app.dto;

import javax.persistence.Column;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LoginDTO {

	@Column(length = 25,unique = true)
	@Email(message ="invalid email format")
	@NotEmpty(message = "email cannot be null")
	private String customerEmail;
	
	@Column(length = 100)
	@NotEmpty(message = "password required")
	private String customerPassword;
}