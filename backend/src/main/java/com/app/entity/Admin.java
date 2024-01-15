package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Admin {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int AdminId;
	
	@Column(length = 20,name = "adminName")
	@NotEmpty(message = "admin name cannot be empty")
	private String adminName;
	
	@Column(length = 25,unique = true)
	@Email
	@NotEmpty(message = "email cannot be null")
	private String adminEmail;
	
	@Column(length = 100)
	@NotEmpty(message = "password required")
	private String adminPassword;
	
	@Column(length = 20, name = "adminPhone")
	@Size(min = 10,max = 10)
	private String adminPhone;
}
