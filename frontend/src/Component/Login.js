import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login =() => {
    return(
        <div className=" position-absolute top-50 start-50 translate-middle loginback">
            <div className="position-absolute top-50 start-50 translate-middle loginform">

                <div className="p-5 text-whiteS">
                    <h1>
                        LOGIN
                    </h1>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email </label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={email} onChange={(e) => { setemail(e.target.value) }} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" value={password} onChange={(e) => { setpassword(e.target.value) }}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={HandleLogin}>Submit</button>
                    <div>
                        <Link className="btn btn-secondary m-3" to={"/register"}>REGISTER</Link>
                        <Link className="m-3" to={"/forgotpassword"}>Forgot Password</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login;