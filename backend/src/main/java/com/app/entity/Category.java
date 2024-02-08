package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

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
public class Category {

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
	private int categoryId;
	
	@Column(length = 20)
	@NotEmpty(message = "category name cannot be empty")
	private String categoryName;
	
	public Category(String value) {
        this.categoryName = value;
    }
	
	public static Category valueOf(String value) {
        return new Category(value);
    }
}
