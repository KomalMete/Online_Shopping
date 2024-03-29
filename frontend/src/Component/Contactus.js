import './Contactus.css'
import React from 'react';



const Contactus =()=>{
    return(
        <form className='contactus'>
            <h1>Contact us</h1>
        <div className='container p-5 bg-black'>
            <h5 style={{color : 'white'}}>Submit Your Query</h5>
            <div className='row'>
            <div className="col-md-6 px-5 text-center offset-3">
                <div class="form-group">
                
                <input type="text" class="form-control" id="fname"  placeholder="first name*" />
                </div>    
                </div>
            </div>
            <br />
            <div className='row'>
            <div className="col-md-6 px-5 text-center offset-3">
                <div class="form-group">
                
                <input type="text" class="form-control" id="lname" aria-describedby="emailHelp" placeholder="last name*" />
                </div>
                </div>
            </div>
            <br />
            <div className='row'>
            <div className="col-md-6 px-5 text-center offset-3">
                <div class="form-group">
                
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter your email*" />
                </div>
                </div>
            </div>    
            <br />
            <div className='row'>
            <div className="col-md-6 px-5 text-center offset-3">
                <div class="form-group">
                
                <input type="text" class="form-control" id="phone" placeholder="enter phone no*" />
                </div>
                </div>
            </div>
            <br />
            <div className='row'>
            <div className="col-md-6 px-5 text-center offset-3">
                <div class="form-group">
                
                <textarea type="text" class="form-control" id="comment" placeholder="comment(upto 500 characters)*" />
                </div>
                </div>
            </div>
                <br />
                <button type="submit" class="btn btn-primary">Submit</button>

        </div>
        <div>
            
            <h6>Need Help!</h6>
            <h6>For Customer Support & Queries:</h6>
            <h6>
            Call us at Customer Care no. : 0000-000-0000
            </h6>
            <h6>
            Email us at customercare@shopify.com
            (Operational Timings: 08:00AM to 10:00PM)
            </h6>
        </div>
      </form>
      
    )
    
}
export default Contactus;