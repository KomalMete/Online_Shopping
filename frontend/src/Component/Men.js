import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "./Common/constants";
import axios from "axios";

const Men = () =>{

    const [menwear, setMenwear] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    useEffect(() =>{
        init();
    }, [])

    const init = () =>{
        const category = "MEN"
        axios.get(url + "/getproducts" +category)
        .then(response => {
            console.log('Printing product data', response.data);
            setMenwear(response.data);
        })
        .catch(error =>{
            console.log('Something went wrong', error);
        })
    }


    return(
        
        <>
            <div className="container">
                <div className="row g-3">
                    {menwear.map((item) => (
                        <div className="col-4">
                            <div className="card " key={item.id}>
                                <div onClick={() => navigate.push(`/product/${item.id}`)}>

                                    
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        
                                        <h5>{item.rate} Rs.</h5>
                                    </div>
                                </div>
                                <button className="btn btn-primary" >Add TO Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Men;