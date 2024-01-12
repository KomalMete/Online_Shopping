package com.app.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Positive;

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
public class Products {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int productId;
	
	@Column(length = 20,name = "productName")
	@NotEmpty(message = "product name cannot be empty")
	private String productName;
	
	@Positive
	private double productPrice;
	
	@Column(length = 20,name = "brand")
	@NotEmpty(message = "brand name cannot be empty")
	private String brand;
	
	@Positive
	private int quantity;
	
	@Enumerated(value = EnumType.STRING)
	private Category category;
}
