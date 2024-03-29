import { useState } from "react";
import axios from "axios";
import { url } from "./Common/constants";

const AddressAndPayment = () =>{

    const user = {
        token: JSON.parse(localStorage.getItem("jwttoken")),
    };

    const [fullName, setfullName] = useState("");
    const [contact, setcontact] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [pincode, setpincode] = useState("");
    const [fullnameErr, setFullNmaeError] = useState("");
    const [phoneNumberErr, setPhoneNumberError] = useState("");
    const [pincodeErr, setPincodeError] = useState("");

    const resetFormData = () => {
        setFullNmaeError("");
        setPhoneNumberError("");
        setPincodeError("");
      };

    const HandlePayment =() =>{
        if(fullName !== "" && contact.length !==9 && pincode !== "")
        {
            resetFormData();
            const order = {
                fullName,
                contact,
                city,
                state,
                pincode
            }
            alert("payment successfull..")
        }
        else {
            fullName === "" && setFullNmaeError("*Enter valid Name");
            //   console;
            contact.length <= 9
              ? setPhoneNumberError("*Enter a 10 digit number")
              : contact === "" && setPhoneNumberError("*Enter valid phone number");
            pincode === "" && setPincodeError("*Enter valid pincode");
          }
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
                id="contact"
                placeholder="Phone Number"
                value={contact}
                onChange={(e) => {
                    setcontact(e.target.value);
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
                id="pincode"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => {
                    setpincode(e.target.value);
                }}
                />
                </div>
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