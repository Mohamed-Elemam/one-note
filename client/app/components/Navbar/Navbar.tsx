"use client";
import React from "react";
import { FcViewDetails } from "react-icons/fc";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {  Navbar } from "flowbite-react";
import { deleteCookie  , hasCookie} from 'cookies-next';

const NavbarComponent = () => {
  const router = useRouter();

  const handleLogout = () => {
    deleteCookie('userToken');
    router.push("/");
  };
  return (
    <>
      <Navbar fluid className="fixed top-0 w-[100%] left-0 z-50">
        <Navbar.Brand href="/" className="items-center space-x-2 rtl:space-x-reverse flex-1">
        
            <span className="text-3xl">
              <FcViewDetails />
            </span>
            <span className="text-2xl font-semibold whitespace-nowrap ">
              One<span className="text-indigo-900">Note</span>
            </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="items-start">
        
          <div>
            {hasCookie('userToken') ? (
              <Link
                href="/"
                className="inline-flex items-center rounded-lg  px-4 py-2 border bg-transparent border-indigo-800 hover:bg-indigo-800 hover:text-white  focus:outline-none text-base mt-4 md:mt-0"
                onClick={handleLogout}
              >
                Log out
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="inline-flex items-center rounded-lg  px-4 py-2 border bg-transparent border-indigo-800 hover:bg-indigo-800 hover:text-white font-semibold focus:outline-none text-base mt-4 md:mt-0"
                >
                  Log in
                </Link>
              </>
            )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
