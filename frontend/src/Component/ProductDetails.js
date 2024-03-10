import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "./Common/constants";
import { useParams } from "react-router-dom";
const ProductDetails = () =>{
    const { id } = useParams();
    const [item, setitem] = useState("")

    useEffect(() => {
        init();
    }, [])

    const init =()=>{
        axios.get(url + "/products/getproduct" +id)
         .then(response => {
            console.log('printing details')

         })
         .catch(error => {
            console.log('Something went wrong', error);
        });
    }
    return(
        <div className="container">
            <div className="my-3">
                <strong >{item.name}</strong>
            </div>
            <div className="my-3">
                <strong >{item.rate}</strong>
            </div>
            <div>
                <button className="btn btn-success">Add To Cart</button>
                <span style={{ marginRight: '10px' }}></span> 
                <button className="btn btn-success">Buy Now</button>
            </div>
        </div>
    )
}
export default ProductDetails;