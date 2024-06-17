/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { poppins700, poppins400, poppins600, poppins500 } from "../fonts";
import Link from "next/link";

const Page = () => {
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(null);
  const [password, setPassword] = React.useState("");
  const { data: session, status } = useSession(); // Use data for session data
  const router = useRouter();

  // console.log(session, "Session from Sign In"); // Optional: Log session data

  const handleSignin = async (e) => {
    console.log("Sign in");
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if(!res.ok) {
        toast.error(res.error)
      }

      if(res.ok) {
        router.replace("/admin")
      }
    } catch (error) {
      // console.error("An unexpected error happened:", error);
      toast.error("An unexpected error happened");
    }
  };

  return (
    <div className=" flex flex-col items-center mt-[60px]">
      <div className=" bg-white  border-bordergray lg:w-[448px] w-full px-[16px] lg:h-[617px] rounded-[4px]  ">
        <h2
          className={`${poppins700.className} text-black text-center text-[22px] lg:text-[28px]`}
        >
          Sign into your account
        </h2>

        <form
          className="mt-8 space-y-8 border  border-bordergray  rounded-[4px] p-[16px] lg:p-[24px] "
          onSubmit={handleSignin}
        >
          <div className=" shadow-sm space-y-[26px]">
            <div className="space-y-[26px]">
              <div className="relative">
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    const newEmail = e.target.value;
                    setEmail(newEmail);
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(newEmail)) {
                      setEmailError("Please enter a valid email address.");
                    } else {
                      setEmailError(null);
                    }
                  }}
                  required
                  className={` ${poppins400.className} block px-[16px] py-[13.5px] w-full text-[14px] text-black bg-transparent rounded-[4px] border border-bordergray appearance-none focus:outline-none focus:ring-0 focus:border-tealblue focus:border-[2px] peer`}
                  placeholder=" "
                />
                <label
                  for="email-address"
                  className={` ${poppins400.className} absolute text-[14px] text-textgray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-tealblue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                >
                  Email address
                </label>
                {emailError && (
                  <p
                    className={` ${poppins400.className} text-red-500 text-xs absolute bottom-[-4] mb-1`}
                  >
                    {emailError}
                  </p>
                )}
              </div>

              <div class="relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required
                  class={` ${poppins400.className} block px-[16px] py-[13.5px] w-full text-[14px] text-textgray bg-transparent rounded-[4px] border border-bordergray appearance-none focus:outline-none focus:ring-0 focus:border-tealblue focus:border-[2px] peer`}
                  placeholder=" "
                />
                <label
                  for="password"
                  className={` ${poppins400.className} absolute text-[14px] text-textgray dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-tealblue peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1`}
                >
                  Password
                </label>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between space-y-8 w-full ">
            <button
              type="submit"
              className={`${poppins600.className} text-white bg-dengologored w-full   py-[10px] text[16px] rounded-[4px] `}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
