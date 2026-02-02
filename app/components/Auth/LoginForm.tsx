"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/app/ui/card";
import { Button } from "@/app/ui/button";

import Link from "next/link";



const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full flex items-center justify-center px-6">
      <Card>
        <h1 className="text-4xl text-black font-semibold mb-6">Sign in</h1>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="text-sm text-black">
              Enter your username or email address
            </label>
            <input
              type="text"
              placeholder="Username or email address"
              className="
                mt-2 w-full rounded-xl border border-gray-300
                px-4 py-2.5 text-sm text-muted
                focus:outline-none focus:ring-2 focus:ring-primary
              "
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-black">Enter your Password</label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="
                  w-full rounded-xl border border-gray-300
                  px-4 py-2.5 text-sm text-muted
                  focus:outline-none focus:ring-2 focus:ring-primary
                "
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  text-primary text-sm font-medium
                "
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>

            <Link
              href="/forgot-password"
              className="mt-2 text-sm text-primary cursor-pointer"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Sign in */}
          <Link href="/flashcard/levels">
            <Button type="submit">Sign in</Button>
          </Link>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px w-full bg-gray-300" />
          <span className="text-sm text-gray-500">or</span>
          <div className="h-px w-full bg-gray-300" />
        </div>

        {/* Google */}
        <Button variant="outline">
          <Image src="/google.svg" alt="Google" width={18} height={18} />
          Continue with Google
        </Button>

        {/* Join */}
        <Link
          href="/signup"
          className="mt-4 text-sm text-primary text-center block"
        >
          New to KonnichiWow? Join now
        </Link>
      </Card>
    </div>
  );
};

export default LoginForm;
