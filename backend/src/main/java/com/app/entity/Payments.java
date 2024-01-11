package com.app.entity;


import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;

import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@Table(name = "payments")
public class Payments {


	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int paymentId;
	
	@NotEmpty(message = "status cannot be empty")
	private String transactionStatus;
}
