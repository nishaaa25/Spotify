import React, { useState } from "react";
import Header from "./Header";
import google from "../assets/google.svg";
import facebook from "../assets/facebook.svg";
import apple from "../assets/apple.svg";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Login = () => {
  // Password visibility function
  const [isVisible, setIsVisible] = useState(false);
  const [isLoginPageActive, setIsLoginPageActive] = useState(true);
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handlePage = () => {
    setIsLoginPageActive(!isLoginPageActive);
  };

  return (
    <div className="w-full relative">
      <Header />
      <div className="custom-bg pt-8 relative">
        <div className="bg-black w-[734px] relative m-auto flex-center flex-col py-[70px] rounded-sm px-28">
          <p className="text-4xl font-semibold w-[340px]  mb-10 ">
            {isLoginPageActive
              ? "Log in to Spotify"
              : "Sign up to start listening"}
          </p>
          <div className="w-[324px]">
            <div className="btn flex justify-start items-center gap-9">
              <img src={google} alt="google" />
              <p>
                {isLoginPageActive
                  ? "Continue with Google"
                  : "Sign up with Google"}
              </p>
            </div>
            <div className="btn flex justify-start items-center gap-9">
              <img src={facebook} alt="facebook" />
              <p>
                {isLoginPageActive
                  ? "Continue with Facebook"
                  : "Sign up with Facebook"}
              </p>
            </div>
            <div className="btn flex justify-start items-center gap-9">
              <img src={apple} alt="apple" />
              <p>
                {isLoginPageActive
                  ? "Continue with Apple"
                  : "Sign up with Apple"}
              </p>
            </div>
            {isLoginPageActive && (
              <div className="btn">
                <p className="ml-4">Continue with phone number</p>
              </div>
            )}
          </div>
          <div className="w-full h-[1px] bg-white bg-opacity-[15%] my-8"></div>
          <form className="w-[324px] relative" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label for="email">
                <p className="text-sm font-bold mb-2">Email</p>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="block mb-4 py-[10px] px-4 w-full border text-base border-gray-dark border-opacity-60 rounded-[4px] bg-black-light"
              ></input>
            </div>
            {!isLoginPageActive && <div>
              <label for="username">
                <p className="text-sm font-bold mb-2">Username</p>
              </label>
              <input
                type="username"
                id="username"
                name="username"
                placeholder="Username"
                className="block mb-4 py-[10px] px-4 w-full border text-base border-gray-dark border-opacity-60 rounded-[4px] bg-black-light"
              ></input>
            </div> }
            <div>
              <label for="password ">
                <p className="text-sm font-bold mb-2">Password</p>
              </label>
              <div className="flex-between block mb-4 py-[10px] px-4 text-base font- w-full border rounded-[4px] border-gray-dark border-opacity-60 bg-black-light">
                <input
                  type={isVisible ? "text" : "password"}
                  id="email"
                  name="email"
                  placeholder="Password"
                  className="bg-black-light outline-none "
                ></input>
                <div onClick={handleVisibility} className="cursor-pointer">
                  {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </div>
              </div>
            </div>
            <button
              className="btn w-full bg-green-light hover:bg-green text-black border-none mt-8"
            >
              {isLoginPageActive ? "Log In": "Sign Up"}
            </button>
            {isLoginPageActive && <a href="/" className="underline cursor-pointer hover:text-green ">
              <p className=" mt-6  text-center">Forgot your password?</p>
            </a>}
          </form>
          <div className="w-full h-[1px] bg-white bg-opacity-[15%] my-8"></div>
          <p className="text-gray-dark mt-4">
            {isLoginPageActive ? "Don't have an account? " : "Already have an account? "}
            <a
              href="#hey"
              className="ml-1 text-white underline cursor-pointer hover:text-green text-center"
              onClick={handlePage}
            >
              {isLoginPageActive ? "Sign Up for Spotify" : "Log in here. "}
            </a>
          </p>
        </div>
      </div>
      <p className="text-[11px] text-gray-dark text-center mb-6">
        This site is protected by reCAPTCHA and the Google
        <a href="/" className="underline mx-[2px] ">
          Privacy Policy
        </a>
        and
        <a href="/" className="underline mx-[2px]">
          Terms of Service
        </a>
        apply.
      </p>
    </div>
  );
};

export default Login;
