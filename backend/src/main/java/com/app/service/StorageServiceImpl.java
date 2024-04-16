package com.app.service;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;



@Service
public class StorageServiceImpl implements StorageService {

	@Value("${disk.upload.basepath}")
	private String BASEPATH;
	
	@Override
	public String uploadImage(String path, MultipartFile file) throws IOException {
		
		
		//get file name
		String name=file.getOriginalFilename();
				
		//String fileName = UUID.randomUUID().toString().replaceAll("-", "")+ext;
		
		//Fullpath
		String filePath = path+ File.separator+name;
		
		//create folder if not present
		File f = new File(path);
		if(!f.exists())
		{
			f.mkdir();
		}
		
		//file copy
		Files.copy(file.getInputStream(), Paths.get(filePath));
		
		return name;
		
//		try(FileOutputStream out = new FileOutputStream(filePath)) {
//			FileCopyUtils.copy(file.getInputStream(), out);
//			return fileName;
//		} catch (Exception e) {
//			 //log.error("Failed to store file", e);
//			    throw new RuntimeException("Failed to store file", e);
//		}
		//return null;
	}
}
