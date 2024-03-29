import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { url } from "./Common/constants";
import axios from "axios";

const AdminHome =() =>{
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const user = {
        token: JSON.parse(localStorage.getItem("jwttoken")),
    };

    useEffect(() => {
        init();
      }, [])

      const init=()=>{
        axios.get(url + "/products", {headers:{"authorization":`Bearer ${user.token}`}})
        .then
        (
            response => {
                console.log(response.data);
                setItems(response.data);
            }
        )
        .catch(error => {
            console.log('Something went wrong', error);
        });
      }

    return(
        <div className="container">
            <div>
                 <h1>Admin Page</h1>
            </div>
            
            <div className="row">
                <div className="col">
                   
                </div>
                <div className="col">
                    <Link className="btn btn-primary" to={"/addproduct"}>Add Product</Link>
                </div>
            </div>

            <div className="border row fw-bold g-1 my-3">
                <div className="col-2">Image</div>
                <div className="col-5">Product Name</div>
                <div className="col-2">Quantity</div>
                <div className="col-2">Price</div>
               
                
            </div>
            {items.map((item) => (
                <div className="border row fw-bold g-1 my-3">
                    <div className="col-2"></div>
                    <div className="col-5">{item.productName}</div>
                    <div className="col-2">{item.quantity}</div>
                    <div className="col-2">{item.productPrice}</div>
                    
                </div>
                
            ))}
        </div>
    )
}
export default AdminHome;