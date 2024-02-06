import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "./Common/constants";
import axios from "axios";

const Men = () =>{

    const [menwear, setMenwear] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const HandleAddCart =() =>{

    }
    useEffect(() =>{
        init();
    }, [])

    const init = () =>{
        const category = "MEN";
        axios.get(url + "/products/getproducts/" + category)
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
                            <div className="card " key={item.product_id}>
                                <div >

                                    
                                    <div className="card-body">
                                        <h5 className="card-title">{item.product_name}</h5>
                                      
                                        <h5>{item.product_price} Rs.</h5>
                                    </div>
                                </div>
                                <button className="btn btn-primary" onClick={() => { HandleAddCart(item.id) }}>Add TO Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Men;