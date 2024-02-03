import React from "react";
import { useState } from "react";
import axios from "axios";
import './Register.css';
import { useNavigate } from "react-router-dom";
import { url } from "./Common/constants";

const Register = () =>{

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneno, setPhoneno] = useState("");

    const navigate = useNavigate();

    const handleSubmit = () =>{

        if(password.length >= 8)
        {
            const customer ={
                firstName,
                lastName,
                email,
                password,
                phoneno
            };
            console.log(customer);
            axios.post( url + "/addcustomer", customer)
            .then(() =>{
                navigate.push("/aboutus");
            })
            .catch((error) => {
                console.log("something wrong", error);
            })
        }
        else{

        }
    }
    return(
        <div>
            <h1>Registration</h1>
            <div>
                <label>
                    First Name
                </label>
                <input 
                type="text"
                className="form-control"
                id="fname"
                value={firstName}
                onChange={(e) => {
                    setFirstName(e.target.value);
                }}
                />
                
            </div>

            <div>
                <label>
                    Last Name
                </label>
                <input 
                type="text"
                className="form-control"
                id="lname"
                value={lastName}
                onChange={(e) => {
                    setLastName(e.target.value);
                }}
                />
                
            </div>

            <div>
                <label>
                    Email
                </label>
                <input 
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => {
                    setEmail(e.target.value);
                }}
                />
                
            </div>

            <div>
                <label>
                    Password
                </label>
                <input 
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => {
                    setPassword(e.target.value);
                }}
                />
                
            </div>

            <div>
                <label>
                    Phone Number
                </label>
                <input 
                type="text"
                className="form-control"
                id="contact"
                value={phoneno}
                onChange={(e) => {
                   setPhoneno(e.target.value);
                }}
                />
                
            </div>

            <button
            type="submit"
            onClick={handleSubmit}
            disabled={password.length >= 8 ? false : true}
            >
                Register
            </button>
        </div>
    );
}

export default Register;