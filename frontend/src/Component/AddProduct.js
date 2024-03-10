import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { url } from "./Common/constants";


const AddProduct = () =>{

    const [brand, setBrand] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const [category, setcategory] = useState("");
    const [imageUel, setImageUrl] = useState("");

    const navigate = useNavigate();

    const HandleAddProduct = () =>{
        const product ={
          brand :brand,
          productName :name,
          productPrice :parseInt(price),
          quantity :parseInt(quantity),
          category :category
        };
        console.log(product);
        axios.post(url + "/products/addproduct" ,product)
        .then((response) =>{

            console.log("product details", response.data);
            navigate("/home");
           
        })
        .catch((error) => {
            console.log("something went wrong", error);
        });
    }
    return(
        <div className="position-absolute top-50 start-50 translate-middle regback">
        <div className="container position-absolute top-50 start-50 translate-middle regform">
          <div className="p-2 text-white fw-bold">
            <h1>Product Details</h1>

            <div className="row">
              <div className="mb-3 col-6 px-5  text-center offset-3">
                <label htmlFor="brand" className="form-label">
                  Brand
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="brand"
                  value={brand}
                  onChange={(e) => {
                    setBrand(e.target.value);
                  }}
                />
              </div>
            
            </div>

            <div className="row">
              <div className="mb-3 col-6 px-5 text-center offset-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
            
            </div>
            <div className="row">
              <div className="mb-3 col-6 px-5 text-center offset-3">
                <label htmlFor="category" className="form-label">
                  Category
                </label>
                <select
                  name="roles"
                  id="roles"
                  className="input-fields-mod form-control"
                  onChange={(e) => {
                    setcategory(e.target.value);
                  }}
                >
                  <option value="" hidden>
                    Choose category
                  </option>
                  <option value="MEN">MEN</option>
                  <option value="WOMEN">WOMEN</option>
                  <option value="ELECTRONICS">ELECTRONICS</option>
                  <option value="HOMEandKITCHEN">HOMEandKITCHEN</option>
                </select>
              </div>
            </div>
            <div className="row">
              <div className="mb-3 col-6 px-5 text-center offset-3">
                <label htmlFor="quantity" className="form-label">
                  Quantity
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="quantity"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </div>
            </div>  

            <div className="row">
              <div className="mb-3 col-6 px-5 text-center offset-3">
                <label htmlFor="price" className="form-label">
                  Price{" "}
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </div>
            </div>
        
            <button
              type="submit"
              className="btn btn-primary"
              onClick={HandleAddProduct}
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    );
    
}
export default AddProduct;