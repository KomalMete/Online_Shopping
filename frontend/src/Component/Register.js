import React from "react";
import { useState } from "react";
import axios from "axios";
import './Register.css';
import { useNavigate } from 'react-router-dom';

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
                customerFirstName: firstName,
                customerLastName: lastName,
                customerEmail: email,
                customerPassword: password,
                customerPhone: phoneno
            };
            console.log(customer);
            axios.post( url + "/customers/addcustomer", customer)
            .then(() =>{
               navigate("/login");
            })
            .catch((error) => {
                console.log("something wrong", error);
            })
        }
        else{

        }
    }
    return(
        <div className="position-absolute top-50 start-50 translate-middle regback">
            <div className="container position-absolute top-50 start-50 translate-middle regform">
                <div className="p-5 text-white fw-bold">
                <h1>Registration</h1>
                <div className="row">
                    <div className="mb-3 col-6 px-5 text-center offset-3">
                        <label htmlFor="fname" className="form-label">
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

                    <div className="row">
                    <div className="mb-3 col-6 px-5 text-center offset-3">
                        <label htmlFor="lname" className="form-label">
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
                    </div>

                    <div className="row">
                    <div className="mb-3 col-6 px-5 text-center offset-3">
                        <label htmlFor="email" className="form-label">
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
                    </div>

                    <div className="row">
                    <div className="mb-3 col-6 px-5 text-center offset-3">
                        <label  htmlFor="password" className="form-label">
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
                    </div>
                    <div className="row">
                    <div className="mb-3 col-6 px-5 text-center offset-3">
                        <label  htmlFor="contact" className="form-label">
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
                    </div>

                    <div className="mb-3 col-6 px-5 text-center offset-3">
                    <button
                        type="submit"
                        className="btn btn-dark"
                        onClick={handleSubmit}
                        disabled={password.length >= 8 ? false : true}
                    >
                    Register
                    </button>
                    </div>
                </div>
                </div>
            </div>
            
           

            
        </div>
    );
}

export default Register;