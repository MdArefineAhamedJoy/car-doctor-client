import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import login from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Provider/AuthProvider";
import SocialLogin from "../Sheard/SocialLogin/SocialLogin";

const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const handelSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((res) => {
        const users = res.user;
        console.log(users);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
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
              <h1 className="text-3xl font-bold text-center">SingUp </h1>
              <form onSubmit={handelSingUp}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                    name="name"
                  />
                </div>
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
                    type="password"
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
                  <input
                    className="btn btn-primary"
                    type="submit"
                    value="Sign Up"
                  />
                </div>
              </form>
              <SocialLogin></SocialLogin>
              <small className="text-center block">
                Already Have an account?{" "}
                <Link className="text-orange-600 btn btn-link" to="/login">
                  login
                </Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
