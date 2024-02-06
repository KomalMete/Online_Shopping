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

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

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
	
	@Column(name = "first_name")
	
	private String customerFirstName;
	
	@Column(name = "last_name")
	
	private String customerLastName;
	
	@Column(unique = true)
	@Email
	
	private String customerEmail;
	
	
	private String customerPassword;
	
	
	private String customerPhone;
}
