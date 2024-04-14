import { useState } from "react";
import axios from "axios";
import { url } from "./Common/constants";
import { useNavigate } from "react-router-dom";

const SuccessPage = ()=>{

    const navigate = useNavigate();

    const BackToHome =() =>{
        navigate("/")
    }
    return(
        <div className="container">
            <h3>Your order has been placed Successfully</h3>
            <button 
            onClick={BackToHome}
            >
                Home page
            </button>
        </div>
    )
}
export default SuccessPage;