
import React from "react";
import { useNavigate } from "react-router-dom";
const Navbar =() =>{
 const navigate = useNavigate();
    return(

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
   
    <a class="navbar-brand" aria-current="page" href="/home">SHOPIFY</a>
     <div className="col-lg-1 col-md-2">
                
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/aboutus">About us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contactus">Contact us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" onClick={()=>{navigate("/Men")}}>Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
      
    </div>

    <form class="d-flex">
        <input class="form-control me-6" type="search" placeholder="Search" aria-label="Search" style={{ width: '300px' }}/> &nbsp;&nbsp;
        <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div className="col-lg-2 col-md-3">
                
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/login">login</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/register">Register</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/cart">cart</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/logout">Logout</a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
        
    );
}
export default Navbar;