package com.app.dto;

import java.util.List;

import com.app.entity.Address;
import com.app.entity.Customer;
import com.app.entity.Payments;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@AllArgsConstructor
public class OrdersDto {

	private Address address;
	private Payments payment;
	
	private List<CartDto> cart;
	
	
}
