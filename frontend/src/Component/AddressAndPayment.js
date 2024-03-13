import { useState } from "react";
import axios from "axios";
import { url } from "./Common/constants";

const AddressAndPayment = () =>{

    const HandlePayment =() =>{
        alert("Payment Successfull..")
    }
    return(
        <div className="container m-5">
            <h1>Add Delivery Address</h1>
            <div className="row">
                <input type="text">
                   
                </input>
              
            </div>
            <button
                type="submit"
                className="btn btn-primary m-5"
                onClick={HandlePayment}
            >
                Proceed Payment : {localStorage.getItem("Total")}
            </button>
        </div>
        
    )
}
export default AddressAndPayment;