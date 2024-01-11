package com.app.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Customer")
@Setter
@Getter
@ToString
public class Customer {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int customerId;
	private String customerName;
	private String customerEmail;
	private String customerPhone;
}
