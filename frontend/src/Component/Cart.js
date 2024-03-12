import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "./Common/constants";
import axios from "axios";
import { useParams } from "react-router-dom";
const Cart =()=>{
    const { customerId } = useParams();
    const [items, setitems] = useState([]);

    const user = {
        token: JSON.parse(localStorage.getItem("jwttoken")),
    };

    const HandleIncreaseQuantity=(id) =>{
        axios.put(url + "/cart/increasequantity/" + id, 
        {
            headers: { authorization: `Bearer ${user.token}` },
        })
      .then((response) =>{
        console.log("Printing product data", response.data);
        init(user);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    
    }

    const HandleDecreaseQuantity=(id) =>{
        axios.put(url + "/cart/decreasequantity/" + id, 
        {
            headers: { authorization: `Bearer ${user.token}` },
        })
      .then((response) =>{
        console.log("Printing product data", response.data);
        init(user);
      })
      .catch((error) => {
        console.log("Something went wrong", error);
      });
    
    }

    const HandleRemove =(productId)=>{
        axios.delete(url + "/cart/deleteproductfromcart/" + productId, 
            {
                headers: { authorization: `Bearer ${user.token}` },
            })
          .then((response) =>{
            console.log("Printing product data", response.data);
            init(user);
          })
          .catch((error) => {
            console.log("Something went wrong", error);
          });

    }

    useEffect(() =>{
        init(user);
    }, [])

    const init = (user) =>{
        axios.get(url + "/cart/getcartproducts/", {
            headers: { authorization: `Bearer ${user.token}` },
          } )
        .then(response => {
            console.log('Printing product data', response.data);
            setitems(response.data);
        })
        .catch(error =>{
            console.log('Something went wrong', error);
        })
    }

    return(
        <div className="container">
            <div className="row g-1 my-3 fw-bold border">
                <div className="col-1"></div>
                <div className="col-2">Title</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Rate</div>
                <div className="col-2">Total</div>
                <div className="col-2"></div>
            </div>
            {items.map((item) => (
                <div className="row border">
                    <div className="col-1">
                        Img
                    </div>

                    <div className="col-2">
                        {item.productName}
                    </div>

                    <div className="col-2">
                        <button 
                            onClick={() => {
                                HandleIncreaseQuantity(item.productId)
                            }}
                        >
                            +
                        </button>
                        {item.quantity}
                        <button
                            onClick={() => {
                                HandleDecreaseQuantity(item.productId)
                            }}
                        >
                            -
                        </button>
                    </div>

                    <div className="col-2">
                        {item.productPrice}
                    </div>

                    <div className="col-2">
                        {parseInt(item.quantity) * parseInt(item.productPrice)}
                    </div>

                    <div className="col-2">
                        <button onClick={() =>{
                            HandleRemove(item.productId)
                        }}>
                            Remove
                        </button>
                    </div>
                </div>
            ))}

            <div>
                <button className="btn btn-success fw-bold my-3">
                    Place Order
                </button>
            </div>
        </div>
    )
}
export default Cart;