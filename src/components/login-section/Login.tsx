"use client";
import { Mail } from "lucide-react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
  return (
    <div className="flex-col flex items-center justify-center mt-10 px-4">
      <div className="w-100 ">
        <h2 className="text-center text-2xl font-medium px-10">
          Welcome to Pickaboo! Please login.
        </h2>

        <div className="mt-4">
          <div className="flex items-center justify-center gap-4 py-3 text-gray-500 font-medium bg-[#EFEFEF] border rounded ">
            <Mail size={20} />
            <p>
              Login with{" "}
              <Link href="loginE">
                <span className="font-bold text-gray-600">Email</span>
              </Link>
            </p>
          </div>

          <div className="flex items-center gap-4 py-3">
            <div className="flex-1 h-px bg-gray-300"></div>

            <p className="text-lg font-medium text-gray-500">or</p>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
        </div>

        <div>
          <form>
            <input
              className="border py-3 px-4 w-full rounded outline-none"
              type="text"
              placeholder="Please enter a mobile number"
            />

            <input
              className="bg-[#1B5DD5] hover:bg-transparent mt-4 text-white hover:text-[#1B5DD5] duration-300 cursor-pointer border border-[#1B5DD5] text-center py-3 w-full rounded text-medium"
              type="submit"
              value="Sign Up/Login"
            />

            <p className="py-3 text-center text-sm font-medium text-gray-500 hover:text-[#1B5DD5] duration-300 cursor-pointer">
              Forgot Your Password?
            </p>

            
          </form>
          <button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/",
                })
              }
              className="mt-2 w-full cursor-pointer flex items-center justify-center border hover:border-[#1B5DD5] hover:text-[#1B5DD5] duration-300 py-3 rounded gap-2"
            >
              <FcGoogle size={20} />
              Continue with Google
            </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
