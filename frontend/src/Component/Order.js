import axios from "axios";
import { useEffect, useState } from "react";
import { url } from "./Common/constants";

const Order =()=>{
    const [items, setitems] = useState([]);

    const user = {
        token: JSON.parse(localStorage.getItem("jwttoken")),
    };

    useEffect (() => {
        init();
    }, []);

    const init = () =>{
        axios
        .get(url + "/orders/getorders", {
            headers: { authorization: `Bearer ${user.token}` },
          })
        .then((response) =>{
            console.log("orders");
            //setitems(response.data)
        })
        .catch((error) => {
            console.log("Something went wrong", error);
          });
    }

    return(
        <div className="container">
            <h1>Orders</h1>
            <div className="border row fw-bold g-1 my-3">
                <div className="col-1">Order Id</div>
                <div className="col-2">Name</div>
                <div className="col-5">Address</div>
                <div className="col-2">Status</div>
                <div className="col-2">Total</div>
            </div>
            {items.map((item) => (
                <div>
                    <div className="col-1">{item.orderId}</div>
                    <div className="col-2">{item.customerName}</div>
                    <div className="col-2">{item.payment}</div>
                    <div className="col-2">{item.orderStatus}</div>
                    <div className="col-2">{item.totalPrice}</div>
                </div>
                
            ))}
        </div>
        
    )
}
export default Order;