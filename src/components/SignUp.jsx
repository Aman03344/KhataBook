import React from "react";
import Apple from "../assets/apple-black-logo-svgrepo-com.svg";
import  Google from '../assets/google-icon-logo-svgrepo-com.svg'

const SignUp = () => {
  return (
    <div className=" w-full h-[100vh] flex bg-gradient-to-t from-[#fff4d2] to-white min-h-screen">
      <div className=" w-[100%] h-[100%] flex flex-col  justify-center items-center">
        <h1 className=" text-4xl py-2">Create an account</h1>
        <form className=" w-full h-auto p-3 flex flex-col justify-center items-center  gap-3 pl-15">
          <input
            className=" border border-gray-300 outline-none rounded-full  px-3 py-3 w-[50%] "
            type="text"
            placeholder="Enter your name"
          />
          <input
            className=" border border-gray-300 outline-none rounded-full  px-3 py-3 w-[50%] "
            type="text"
            placeholder="Enter Email "
          />
          <input
            className=" border border-gray-300 outline-none rounded-full  px-3 py-3 w-[50%] "
            type="text"
            placeholder="Enter your password"
          />
          <button className="w-[50%] py-3 bg-yellow-400 text-white font-semibold rounded-full  hover:bg-yellow-500 transition duration-300">
            Sign Up
          </button>
          <div className=" w-full h-auto flex justify-center items-center gap-2">
            <button className=" border border-gray-300 w-[24%] py-3 rounded-full font-semibold cursor-pointer flex justify-center items-center gap-2">
              <img className=" w-[8.5%]" src={Google} alt="" />
              Google
            </button>
            <button className=" border border-gray-300 w-[24%] py-3 rounded-full font-semibold cursor-pointer flex justify-center items-center gap-1">
              {" "}
              <img className=" w-[9%]" src={Apple} alt="" />
              Apple
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
