import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login =()=>{
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const navigate = useNavigate();

const HandleLogin=()=>{
    const user = {
        email,
        password
    }
}

    return(
       
        <div className="container" style={{ width: "40%" }}>
            <div className="card shadow bg-transparent mt-3 text-black font-weight-bold">
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-8 mx-auto">
                            <h4 className="text-center p-2">
                                Login Form
                            </h4>
                            <form onSubmit={HandleLogin}>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label">Email_Id</label>
                                    <div className="col-sm-8">
                                        <input type="text" name="userid" value={email} onChange={HandleLogin} className="form-control" />
                                        
                                    </div>

                                </div>
                                <div className="form-group form-row">
                                    <label className="col-sm-4 form-control-label">Password</label>
                                    <div className="col-sm-8 mb-5">
                                        <input type="password" name="pwd" value={password} onChange={HandleLogin} className="form-control" />
                                       
                                    </div>
                                </div>
                                <button className="btn btn-primary float-right">Login Now</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        
 
    );
}
export default Login;