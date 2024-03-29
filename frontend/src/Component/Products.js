import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { url } from "./Common/constants";
import axios from "axios";
import { useParams } from "react-router-dom";
import Mobile from '../Images/Mobile-1.jpg';

const Products = () => {
    const navigate = useNavigate();
    
    const [product, setProduct] = useState([]);
    const { pname } = useParams();

    const [name, setname] = useState(pname);
    const [quantity, setQuantity] = useState(1);
    const user = {
        token: JSON.parse(localStorage.getItem("jwttoken")),
    };

    const HandleAddCart =(productId, user) =>
    {
             if(user && user.token){
            const itemToCart = {
                productId,
                quantity,
               
            }
            
        axios.post(url + "/products/addtocart" ,itemToCart, { headers: { "authorization": `Bearer ${user.token}` } })
        .then((response) =>{
            console.log("data" , response.data);
            setQuantity=1;
            alert("product added to cart..");
        })
        .catch(error => {
            console.log("something went wrong",error);
        })
        }
         else{
             alert("please login..")
        }
        

    }

    useEffect(() =>{
        init();
    }, [])

    const init = () =>{
       
        axios.get(`${url}/products/searchproduct/${pname}`)
        .then(response => {
           // console.log('Printing product data', response.data);
            console.log(name);
            setProduct(response.data);
        })
        .catch(error =>{
            console.log('Something went wrong', error);
        })
    }

    
    return(
        
        <>
            <div className="container ">

                <div className="row g-3 p-5 ">
                    {product.map((item) => (
                        <div className="col-4">
                            <div className="card " key={item.productId}>
                                <div >

                                <img src={Mobile} height={150}   className="card-img-top px-5" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.productName}</h5>
                                      
                                        <h5>{item.productPrice} Rs.</h5>
                                    </div>
                                </div>
                                <div>
                                <button className="btn btn-primary btn-sm" onClick={() => { HandleAddCart(item.productId, user) }}>Add To Cart</button>
                               
                                <span style={{ marginRight: '10px' }}></span> 
                                <button className="btn btn-success btn-sm" onClick={() => navigate(`/products/getproduct/${item.productId}`)}>View Product</button>
                                </div>
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Products;