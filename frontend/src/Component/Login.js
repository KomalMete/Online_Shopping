import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { url } from "./Common/constants";
import "./Login.css"
import Alert from 'react-bootstrap/Alert';

const Login =() => {

    const [email, setEmail] = useState();
    const [password , setpassword] = useState();
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLogin=() =>{
        console.log("handleLogin function called");

        if (!email || !password) {
            console.log("Email and password are required.");
            //setError("Email and password are required.");
            //alert("Email and password are required.");
           
            return;
        }
        

        const customer = {
            customerEmail : email,
            customerPassword : password
        };

        
        axios.post(url + "/customers/login" ,customer)
        .then( Response => {
            if(Response.data.jwt && Response.status == 200)
                {
                    localStorage.setItem('jwttoken',JSON.stringify(Response.data.jwt));
                    if(Response.data.role ==='[ROLE_customer]')
                    {
                        console.log(customer.customerEmail);
                        console.log(customer.role);
                        console.log("Customer login successful");
                        navigate("/");
                    }
                    else if(Response.data.role ==='[ROLE_admin]')
                    {
                        console.log("Admin login successful");
                        console.log("admin details",customer.customerEmail);
                        navigate("/adminhome")
                    }
                    else
                    {
                        console.log("Invalid role received from backend:", Response.data.role);
                        setError("Invalid role received from backend: " + Response.data.role);
                    }
                } 
                else
                {
                    console.log("Invalid response from backend:", Response);
                    setError("Invalid email or password. Please try again.");
                }
        })
        .catch(error => {
            if (error.response && error.response.status === 403) {
                setError("Invalid email or password. Please try again.");
            } else {
                console.log('Something went wrong', error);
                setError('Something went wrong. Please try again.');
            }
        });
        

    }

    return(
        <div className="container">
        <div className=" position-absolute top-50 start-50 translate-middle loginback">
            <h1>Welcome To Shopify</h1>
           
            <div className="position-absolute top-50 start-50 translate-middle loginform">
                
                <div className="p-5 text-white">
                    <h1>
                        LOGIN
                    </h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email </label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => { setpassword(e.target.value) }}/>
                    </div>
                    <button type="submit" className="btn btn-dark m-3" onClick={handleLogin}>Submit</button>
                    
                    <div className="row">
                        <h6>Not Yet Customer?</h6>
                        <Link className="btn btn-success m-3" to={"/register"}>REGISTER</Link>
                        
                    </div>
                </div>

                
            </div>
        </div>
        </div>
    )
}
export default Login;