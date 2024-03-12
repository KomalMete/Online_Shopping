package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Component
@Entity
@Table(name = "Customers")
@Setter
@Getter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Customer {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int customerId;
	
	@Column(length = 6, name = "first_name")
	@NotEmpty(message = "firstname cannot be empty")
	private String customerFirstName;
	
	@Column(length = 6,name = "last_name")
	@NotEmpty(message = "lastname cannot be empty")
	private String customerLastName;
	
	@Column(length = 25,unique = true)
	@Email
	@NotEmpty(message = "email cannot be null")
	private String customerEmail;
	
	@Column(length = 9)
	@NotEmpty(message = "password required")
	private String customerPassword;
	
	@Column(length = 10)
	@Size(min = 10,max = 10)
	private String customerPhone;

	@Column(length = 20)
	@NotEmpty
	private String role;


	
}
