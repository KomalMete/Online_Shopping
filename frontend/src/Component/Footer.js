import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import shopify from '../Images/shopify.png';
const Footer =() =>{

return(
    
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container p-5">
        <div className="row ">

            <div className="col-lg-4 col-md-6 ">
                <img src={shopify}></img>
            </div>

            <div className="col-lg-4 col-md-6">
                <h4>Get to know us</h4>
                <a href="/aboutus">About us</a><br />
                <a href="/contactus">Contact us</a>
            </div>
            <div className="col-lg-4 col-md-6">
                <h4>Connect with us</h4>
                <a href="https://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                &nbsp;&nbsp;
                <a href="https://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                &nbsp;&nbsp;
                <a href="https://twitter.com">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                &nbsp;&nbsp;
               
            </div>
        </div>

        
        </div>
        
    </div>
);
}
export default Footer;