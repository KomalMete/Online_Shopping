import { useState } from "react";
import axios from "axios";
import { url } from "./Common/constants";

const AddressAndPayment = () =>{

    

    const [fullName, setfullName] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [zip, setzip] = useState("");
    const [country, setcountry] = useState("");
    const [fullnameErr, setFullNmaeError] = useState("");
    const [phoneNumberErr, setPhoneNumberError] = useState("");
    const [pincodeErr, setPincodeError] = useState("");

    const user = {
        token: JSON.parse(localStorage.getItem("jwttoken")),
    };

    const resetFormData = () => {
        setFullNmaeError("");
        
        setPincodeError("");
      };

    const HandlePayment =(user) =>{
        if(fullName !== "" &&  zip !== "")
        {
            //resetFormData();
            const address = {
                fullName,
                city,
                state,
                zip,
                country
            }
            axios.post(url +"/address/addaddress" ,address,{
                headers: { authorization: `Bearer ${user.token}` },
            })
            .then((response) =>{
                console.log("Printing product data", response.data);
                placeOrder();
              })
              .catch((error) => {
                console.log("Something went wrong", error);
              });


              
            
        }
        else {
            fullName === "" && setFullNmaeError("*Enter valid Name");
            //   console;
            zip === "" && setPincodeError("*Enter valid pincode");
            console.error("Form validation error: Name and zip code are required.");
          }
    }

    const placeOrder = (orderId,addressId)=>{

        const data = {
            orderId,
            addressId: addressId ? addressId : null // Use null if addressId is not provided
        };

        axios.post(url + "/orders/orderplace",data, {
            headers: { authorization: `Bearer ${user.token}` },
        } )
        .then((response) =>{
            console.log("Printing order data", response.data);
            
          })
          .catch((error) => {
            console.log("order not place", error);
          });
    }


    return(
        <div className="container m-5">
            <h1>Add Delivery Address</h1>
            <div className="row">
                <div className="mb-3 col px-5">
                <input 
                type="text" 
                className="form-control"
                id="fullname"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => {
                    setfullName(e.target.value);
                }}
                />
                 </div>
            </div>

            <div className="row">
                <div className="mb-3 col px-5">
                <input 
                type="text" 
                className="form-control"
                id="country"
                placeholder="country"
                value={country}
                onChange={(e) => {
                    setcountry(e.target.value);
                }}
                />
                </div>
            </div>

            <div className="row">
                <div className="mb-3 col px-5">
                <input 
                type="text" 
                className="form-control"
                id="city"
                placeholder="City"
                value={city}
                onChange={(e) => {
                    setcity(e.target.value);
                }}
                />
                </div>

                <div className="mb-3 col px-5">
                <input 
                type="text" 
                className="form-control"
                id="state"
                placeholder="State"
                value={state}
                onChange={(e) => {
                    setstate(e.target.value);
                }}
                />
                </div>
            </div>

            <div className="row">
                <div className="mb-3 col px-5">
                <input 
                type="text" 
                className="form-control"
                id="zip"
                placeholder="zip"
                value={zip}
                onChange={(e) => {
                    setzip(e.target.value);
                }}
                />
                </div>
            </div>


            <button
                type="submit"
                className="btn btn-primary m-5"
                onClick={() => HandlePayment(user)}
            >
                Proceed Payment : {localStorage.getItem("Total")}
            </button>
        </div>
        
    )
}
export default AddressAndPayment;