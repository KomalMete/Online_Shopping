package com.app.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Setter
@Getter
@ToString
@Table(name = "orders")
@AllArgsConstructor
@NoArgsConstructor
public class Orders {

	
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int orderId;
	
	@NotEmpty(message = "status cannot be empty")
	private String orderStatus;
	
	@OneToOne
	@JoinColumn(name = "payment_id")
	private Payments payment;
	
	@ManyToOne
	@JoinColumn(name ="address_id")
	private Address address;
	
	@ManyToMany
    @JoinTable(name = "order_product",
               joinColumns = @JoinColumn(name = "order_id"),
               inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Products> products;
	
	@ManyToOne
	@JoinColumn(name = "customer_id")
	private Customer customer;
}
