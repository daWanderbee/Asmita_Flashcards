import React from "react";
import Image from "next/image";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SignupForm = () => {
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
        <h1 className="text-4xl text-black font-semibold mb-6">Sign up</h1>

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

          {/* Password */}
          <div>
            <label className="text-sm text-black">Enter your Password</label>

            <div className="relative mt-2">
              <input
                type="password"
                placeholder="Password"
                className="
                  w-full 
                  rounded-xl 
                  border 
                  border-gray-300 
                  px-4 
                  py-2.5 
                  text-sm
                  focus:outline-none 
                  text-muted
                  focus:ring-2 
                  focus:ring-primary
                "
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-primary text-sm cursor-pointer">
                Show
              </span>
            </div>

            <div className="mt-2 text-sm text-primary cursor-pointer">
              Forgot Password?
            </div>
          </div>

          {/* Sign up button */}
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
            Sign in
          </button>
        </form>

        {/* OR divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px w-full bg-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <div className="h-px w-full bg-gray-300" />
        </div>

        {/* Google button */}
        <button
          className="
            w-full 
            rounded-full 
            border 
            border-gray-300 
            py-2.5 
            text-sm 
            flex 
            items-center 
            justify-center 
            gap-2 
            hover:bg-gray-50
          "
        >
          <Image src="/google.svg" alt="Google" width={18} height={18} />
          <span className="font-medium text-muted">Continue with Google</span>
        </button>

        {/* Join */}

        <div className="mt-2 text-sm text-primary cursor-pointer mx-auto text-center">
          Already on KonnichiWow? Sign in
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
