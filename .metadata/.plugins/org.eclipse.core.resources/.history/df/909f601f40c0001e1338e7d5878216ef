package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString
@NoArgsConstructor

public class Cart {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int cartId;
	
	@Column(name="product_id")
	int productId;
	
	@Column(length = 20,name = "productName")
	@NotEmpty(message = "product name cannot be empty")
	private String productName;
	
	@Positive
	private double rate;
	
	@Column
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name = "customer_Id")
	private Customer customer;
}
