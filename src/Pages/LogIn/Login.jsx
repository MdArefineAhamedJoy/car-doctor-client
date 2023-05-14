import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { logIn} = useContext(AuthContext)
    const handelSingIn = event =>{
        event.preventDefault()
        const form = event.target ;
        const email = form.email.value 
        const password = form.password.value
        logIn(email,password)
        .then(res => {
          const loginUser = res.user ;
          console.log(loginUser)
        })
        .catch(error =>{
          console.log(error.message)
        })
    }
  return (
    <>
      <div className=" min-h-screen bg-base-200">
        <div className="hero-content flex md:flex-row ">
          <div className="text-center lg:text-left md:w-1/2">
            <div className="">
              <img src={login} alt="" />
            </div>
          </div>
          <div className="w-1/2 rounded-md shadow-xl p-5">
            <div className="card md:w-10/12  mx-auto  w-full   shadow-2xl bg-base-100">
              <div className="card-body">
                <h1 className="text-3xl font-bold text-center">Login </h1>
                <form onSubmit={handelSingIn}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="email"
                      className="input input-bordered"
                      name="email"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      className="input input-bordered"
                      name="password"
                    />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Sign In" />
                  </div>
                </form>
                <div>
                  <p className="text-center mt-7">
                    <small>Or Sign In with</small>
                  </p>
                  <div className="flex justify-center gap-5 my-7">
                    <FaGoogle ></FaGoogle>
                    <FaFacebookF></FaFacebookF>
                    <FaLinkedinIn></FaLinkedinIn>
                  </div>
                  <small className="text-center block">
                    Have an account? <Link className="text-orange-600 btn btn-link" to="/singup">Sign Up</Link>
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
