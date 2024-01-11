package com.app.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.app.dto.Response;

public class ExceptionalHandler {

	@ExceptionHandler({RuntimeException.class})
	public ResponseEntity<?> handleRuntimeException(RuntimeException ex) {
		return Response.error(ex.getMessage());
	}
}




//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.ControllerAdvice;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//
//
//
//@ControllerAdvice
//public class RestControllerExceptionHandler {
//	@ExceptionHandler({RuntimeException.class})
//	public ResponseEntity<?> handleRuntimeException(RuntimeException ex) {
//		return Response.error(ex.getMessage());
//	}
//}
