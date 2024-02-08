import React from "react";

const ProductDetails = () =>{
    return(
        <div className="container">

            <div>
                <button className="btn btn-success">Add To Cart</button>
                <span style={{ marginRight: '10px' }}></span> 
                <button className="btn btn-success">Buy Now</button>
            </div>
        </div>
    )
}
export default ProductDetails;