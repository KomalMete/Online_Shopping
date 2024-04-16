package com.app.service;

import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;

public interface StorageService {

	String uploadImage(String path, MultipartFile file) throws IOException;

	//String store(String bASEPATH, MultipartFile pic);
}
