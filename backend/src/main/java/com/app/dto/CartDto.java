package com.app.dto;

public class CartDto {

	private int quantity;
	private int productId;
	private int customerId;
	
	
	
	public CartDto(int quantity, int productId, int customerId) {
		super();
		this.quantity = quantity;
		this.productId = productId;
		this.customerId = customerId;
	}
	
	public int getCustomerId() {
		return customerId;
	}
	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}
	public int getQuantity() {
		return quantity;
	}
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	public int getProductId() {
		return productId;
	}
	public void setProductId(int productId) {
		this.productId = productId;
	}
	
	@Override
	public String toString() {
		return "CartDto [quantity=" + quantity + ", productId=" + productId + ", customerId=" + customerId + "]";
	}
	
	
}
