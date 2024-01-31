package com.app.entity;

import java.util.Optional;

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

	public Cart(int productId2, String productName2, int quantity2, double productPrice, Optional<Customer> cust1) {
		// TODO Auto-generated constructor stub
	}

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int cartId;
	
	@Column(name="product_id")
	int productId;
	
	@Column(length = 20,name = "productName")
	@NotEmpty(message = "product name cannot be empty")
	private String productName;
	
	@Positive
	private int productPrice;
	
	@Column
	private int quantity;
	
	@ManyToOne
	@JoinColumn(name = "customer_Id")
	private Customer customer;
}
