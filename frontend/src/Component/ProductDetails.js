import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { url } from "./Common/constants";
import { useParams } from "react-router-dom";
const ProductDetails = () =>{
    const { productId } = useParams();
    const [item, setitem] = useState("")
    
    const [productQuantity, setquantity] = useState(1);
    useEffect(() => {
        init();
    }, [])

    const init =()=>{
        axios.get(url + "/products/getproduct/" +productId)
         .then(response => {
            console.log('printing details')
            setitem(response.data);
         })
         .catch(error => {
            console.log('Something went wrong', error);
        });
    }
    return(
        <div className="container">
            <div className="my-3">
                <strong >{item.productName}</strong>
            </div>
            <div className="my-3">
                <strong >{item.productPrice}</strong>
            </div>

            <div className="row">
                <div>Quantity</div>
                <div className="my-3">
                    <input type="number" id="quantity" value={productQuantity} onChange={(e) => {setquantity(e.target.value)}}></input>
                </div>
            </div>
            <div className="my-3">
                <button className="btn btn-success">Add To Cart</button>
                <span style={{ marginRight: '10px' }}></span> 
                <button className="btn btn-success">Buy Now</button>
            </div>
        </div>
    )
}
export default ProductDetails;