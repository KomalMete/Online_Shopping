import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "./Common/constants";
import axios from "axios";

const Electronics = () =>{

    const [electronics, setElectronics] = useState([]);
    const [quantity, setQuantity] = useState(1);

    const navigate = useNavigate();

    const HandleAddCart =() =>{

    }
    useEffect(() =>{
        init();
    }, [])

    const init = () =>{
        const category = "Electronics" ;
        axios.get(url + "/products/getproducts/" + category)
        .then(response => {
            console.log('Printing product data', response.data);
            setElectronics(response.data);
        })
        .catch(error =>{
            console.log('Something went wrong', error);
        })
    }


    return(
        
        <>
            <div className="container ">
                <div className="row g-3 p-5 ">
                    {electronics.map((item) => (
                        <div className="col-4">
                            <div className="card " key={item.productId}>
                                <div >

                                    
                                    <div className="card-body">
                                        <h5 className="card-title">{item.productName}</h5>
                                      
                                        <h5>{item.productPrice} Rs.</h5>
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
export default Electronics;