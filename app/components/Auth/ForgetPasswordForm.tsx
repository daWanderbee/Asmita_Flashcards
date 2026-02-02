import React from "react";
import Image from "next/image";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ForgetPassword = () => {
  return (
    <div className="w-full flex items-center justify-center px-6">
      <div
        className="
          w-full 
          max-w-md 
          bg-white 
          rounded-3xl 
          p-8
          shadow-[8px_10px_0px_rgba(0,0,0,0.9)]
        "
      >
        <h1 className="text-4xl text-black font-semibold mb-6">Forgot Password?</h1>

        <form className="space-y-5">
          {/* Username / Email */}
          <div>
            <label className="text-sm  text-black">
              Enter your username or email address
            </label>
            <input
              type="text"
              placeholder="Username or email address"
              className="
                mt-2 
                w-full 
                rounded-xl 
                border 
                border-gray-300 
                px-4 
                py-2.5 
                text-sm
                text-muted
                focus:outline-none 
                focus:ring-2 
                focus:ring-primary
              "
            />
          </div>

         
          {/* Reset Password button */}
          <button
            type="submit"
            className="
              w-full 
              rounded-full 
              bg-primary 
              py-2.5 
              text-white 
              font-medium 
              hover:bg-pink-600 
              transition
            "
          >
            Reset Password
          </button>
        </form>

             </div>
    </div>
  );
};

export default ForgetPassword;
