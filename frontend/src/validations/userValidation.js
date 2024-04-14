const userValidation = (values) => {
    let errors = {};
  
    if (!values.firstName) {
      errors.firstName = "first Name is required";
    }
  
    if (!values.lastName) {
      errors.lastName = "last Name is required";
    }
  
    if (!values.email) {
      errors.email = "Email ID is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!values.phoneno) {
      errors.phoneno = "Phone number is required";
    } else if (!/^\d{10}$/.test(values.phoneno)) {
      errors.phoneno = "Invalid phone number. Please enter a 10-digit number";
    }
  
    if (!values.password) {
      errors.pwd = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
  
    
  
    return errors;
  };
  
  export default userValidation;
  