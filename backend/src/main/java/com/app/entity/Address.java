package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
public class Address {

	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int addressId;
	
	@NotEmpty(message = "city cannot be empty")
	private String city;
	
	@NotEmpty(message = "state cannot be empty")
	private String state;
	
	@Size(min = 6,max = 6)
	@NotEmpty(message = "zip cannot be empty")
	private String zip;
	
	@NotEmpty(message = "country cannot be empty")
	private String country;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;
	
}
