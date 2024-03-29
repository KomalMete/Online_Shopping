
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';


const AdminNavbar =() =>{
  const [pname, setname] = useState("")
 const navigate = useNavigate();
    return(

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
   
    <a class="navbar-brand" aria-current="page" href="/">SHOPIFY</a>
     <div className="col-lg-1 col-md-2">
                
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/aboutus">About us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/contactus">Contact us</a>
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li> */}
        <Link to="/aboutus" className="nav-link">About us</Link>
        <Link to="/contactus" className="nav-link">Contact us</Link>
        <Link to="/" className="nav-link">Home</Link>

       

            <NavDropdown title="Category" id="basic-nav-dropdown">
                <NavDropdown.Item href="/men">MEN</NavDropdown.Item>
                <NavDropdown.Item href="/women">WOMEN</NavDropdown.Item>
                <NavDropdown.Item href="/electronics">ELECTRONICS</NavDropdown.Item>
                <NavDropdown.Item href="/homeandkitchen">HOME & KITCHEN</NavDropdown.Item>
            </NavDropdown>

        
      </ul>
      
    </div>

    <form class="d-flex">
        <input class="form-control me-6" type="search" placeholder="Search" aria-label="Search" style={{ width: '300px' }} value={pname} onChange={(e) => { setname(e.target.value) }}/> &nbsp;&nbsp;
        <button class="btn btn-outline-success" type="submit" onClick={()=>{navigate(`/products/searchproduct/${pname}`)}}>Search</button>
    </form>
    <div className="col-lg-2 col-md-3">
              
    </div>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/adminhome">Products</a>
        </li>

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
export default AdminNavbar;