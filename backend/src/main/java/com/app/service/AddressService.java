package com.app.service;

import java.util.List;

import com.app.entity.Address;

public interface AddressService {

	List<Address> getAllAddressOfCustomer(String email);

	String addCustomerAddress(Address address, String name);

}
