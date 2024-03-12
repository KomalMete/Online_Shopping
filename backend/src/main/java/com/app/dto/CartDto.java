package com.app.dto;

public class CartDto {

	private int quantity;
	private int productId;
	
	
	
	
	public CartDto(int quantity, int productId) {
		super();
		this.quantity = quantity;
		this.productId = productId;
		
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
		return "CartDto [quantity=" + quantity + ", productId=" + productId + "]";
	}
	
	
	
	
}
