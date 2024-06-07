"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { poppins400 } from "../../app/fonts";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "../Sidebar";
const Navbar = () => {
  const pathname = usePathname();
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  return (
    <div className="mb-1 z-10 bg-white sticky top-0 w-full flex lg:px-[40px] lg:py-[16px] px-[16px] py-[21px] items-center justify-between shadow-md">
      <div className="flex items-center">
        <div>
          
            <button className="lg:hidden mr-[7px]" onClick={toggleSideMenu}>
              <MenuIcon />
            </button>
          
        </div>
        <Link href={"/"} className="lg:mt-0 mt-1">
          <img
            src="/dengo-logo.png"
            alt="Logo"
            className="lg:w-[92px] lg:h-[42px] w-[70px] h-[31px]"
          />
        </Link>
      </div>

      <div className="flex space-x-4 items-center">
        {session ? (
          <div className="relative flex items-center space-x-4">
            {session?.user.firstName && (
              <Link
                href="/admin"
                className={`text-black font-semibold hover:underline ${poppins400.className} text-[14px] leading-[21px]`}
              >
                {session.user.firstName || "Admin"}
              </Link>
            )}
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2"
            >
              <img
                src="../userlogo.png"
                alt="Hi"
                className="w-10 h-10 rounded-full"
              />
            </button>
            {dropdownOpen && (
              <div className="absolute top-10 right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                {/* <div className="py-2 px-4 text-gray-700">
                  {session.user.email}
                </div> */}
                <button
                  onClick={() => signOut()}
                  className="w-full text-left py-2 px-4 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex space-x-4">
            {pathname != "/signin" ? (
              <Link
                href="/signin"
                className={`${poppins400.className} text-textgray text-[14px]`}
              >
                Sign In
              </Link>
            ) : (
              <a
                href="mailto:someone@example.com"
                className="flex items-center space-x-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="lg:size-6 size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
                <p
                  className={`${poppins400.className} text-textgray text-[12px] lg:text-[14px]`}
                >
                  contact@dengo.io
                </p>
              </a>
            )}
          </div>
        )}
      </div>
      {sideMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full  z-10 bg-white rounded-md shadow-lg md:hidden">
          <Sidebar />
        </div>
      )}
    </div>
  );
};

export default Navbar;
