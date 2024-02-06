import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { url } from "./Common/constants";
import "./Login.css"

const Login =() => {

    const [email, setEmail] = useState();
    const [password , setpassword] = useState();

    const navigate = useNavigate();

    const handleLogin=() =>{

        const customer = {
            customerEmail : email,
            customerPassword : password
        };
        axios.post(url + "/customers/login" ,customer)
        .then( () => {
            navigate("/home")
        })
        .catch(error => {
            console.log('Something went wrong', error);
        })

    }

    return(
        <div className=" position-absolute top-50 start-50 translate-middle loginback">
            <h1>Welcome To Shopify</h1>
           
            <div className="position-absolute top-50 start-50 translate-middle loginform">
                
                <div className="p-5 text-white">
                    <h1>
                        LOGIN
                    </h1>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email </label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => { setpassword(e.target.value) }}/>
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={handleLogin}>Submit</button>
                    <div>
                        <Link className="btn btn-success m-3" to={"/register"}>REGISTER</Link>
                        <Link className="m-3" to={"/forgotpassword"}>Forgot Password</Link>
                    </div>
                </div>

                
            </div>
        </div>
    )
}
export default Login;