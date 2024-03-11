import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "./Common/constants";
import axios from "axios";
import { useParams } from "react-router-dom";
const Cart =()=>{
    const { customerId } = useParams();
    const [items, setitems] = useState([]);

    useEffect(() =>{
        init();
    }, [])

    const init = () =>{
        axios.get(url + "/cart/getcartproducts/" + customerId)
        .then(response => {
            console.log('Printing product data', response.data);
            setitems(response.data);
        })
        .catch(error =>{
            console.log('Something went wrong', error);
        })
    }

    return(
        <h1>hello</h1>
    )
}
export default Cart;