import React, { useContext } from "react";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { AuthContext } from "../../../Provider/AuthProvider";
const SocialLogin = () => {
    const {loginWithGoogle} = useContext(AuthContext)
    const handleGooglLogin = ()=>{
        loginWithGoogle()
        .then(res => {
            const loginUser = res.user 
            console.log(loginUser)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
  return (
    <div>
      <div>
        <p className="text-center mt-7">
          <small>Or Sign In with</small>
        </p>
        <div className="flex justify-center gap-5 my-7">
          <button onClick={handleGooglLogin} className="btn btn-outline"><FaGoogle></FaGoogle></button>
          <button className="btn btn-outline"><FaFacebookF></FaFacebookF></button>
          <button className="btn btn-outline"><FaLinkedinIn></FaLinkedinIn></button>
        </div>

      </div>
    </div>
  );
};

export default SocialLogin;
