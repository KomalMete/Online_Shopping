import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom'; 
import { url } from "./Common/constants";
import "./Register.css"

const Register = () =>{
    const [firstName, setfirstname] = useState("");
    const [lastName, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [contact, setcontact] = useState("");

    const navigate = useNavigate();

    const HandleSubmit = () =>{
        if(password.length >= 8)
        {
            const customer = {
                firstName,
                lastName,
                email,
                password,
                contact,
            };
            console.log(customer);
            axios
            .post(url + "/register", customer)
            .then((response) =>{
                alert("registration successful...");

                navigate.push("/login");
            })
            .catch((error) => {
                console.log("something went wrong" ,error);
            });
        }
        else{

        }
    };
    

    return(
      <div className="position-absolute top-50 start-50 translate-middle regback">
        <div className="container position-absolute top-50 start-50 translate-middle regform">
            <div className="p-5 text-black fw-bold">
                <h1>Register</h1>
                <div className="row">
                    <div className="mb-3 col px-5">
                        <label htmlFor= "fname" className="form-label">
                            First Name
                        </label>
                        <input 
                        type="text"
                        className="form-control"
                        id="fname"
                        value={firstName}
                        onChange={(e) => {
                            setfirstname(e.target.value);
                        }}
                        />
                       
                    </div>

                    <div className="mb-3 col px-5">
                        <label htmlFor= "lname" className="form-label">
                            Last Name
                        </label>
                        <input 
                        type="text"
                        className="form-control"
                        id="lname"
                        value={lastName}
                        onChange={(e) => {
                            setlastname(e.target.value);
                        }}
                        />
                       
                    </div>

                    <div className="mb-3 col px-5">
                        <label htmlFor= "email" className="form-label">
                            Email{" "}
                        </label>
                        <input 
                        type="email"
                        className="form-control"
                        id="email"
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value);
                        }}
                        />
                       
                    </div>

                    <div className="mb-3 col px-5">
                        <label htmlFor= "password" className="form-label">
                            Password
                        </label>
                        <input 
                        type="password"
                        className="form-control"
                        id="password"
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value);
                        }}
                        />
                       
                    </div>

                    <div className="mb-3 col px-5">
                        <label htmlFor= "contact" className="form-label">
                           Contact{" "}
                        </label>
                        <input 
                        type="text"
                        className="form-control"
                        id="contact"
                        value={contact}
                        onChange={(e) => {
                            setcontact(e.target.value);
                        }}
                        />
                       
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={HandleSubmit}
                    style={{cursor: password.length >= 8 ? "pointer" : "arrow"}}
                >
                    Register
                </button>
            </div>
        </div>
      </div>
    )
}
export default Register;