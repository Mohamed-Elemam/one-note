import React from "react";
import { FcViewDetails } from "react-icons/fc";
import { IconContext } from "react-icons";
import Link from "next/link";
import { userToken } from "@/app/notes/page";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 border dark:bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <span className="text-3xl">
              <FcViewDetails />
            </span>
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              OneNote
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div
            className=" hidden w-full md:block md:w-auto"
            id="navbar-default"
          >
           <div className="flex gap-3 ">
            {userToken?
            
             <Link
               href="/"
               className="inline-flex items-center rounded-lg  px-4 py-2 border bg-transparent border-indigo-900 hover:bg-indigo-900 hover:text-white font-semibold focus:outline-none text-base mt-4 md:mt-0"

              //  className="inline-flex items-center px-5 py-2.5 bg-blue-300 rounded-lg hover:bg-blue-400 font-semibold focus:outline-none text-base mt-4 md:mt-0 "
             >
               Log out
             </Link>
            :
            
             (
             <>
             <Link
               href="/signup"
               className="inline-flex items-center  px-4 py-2 bg-blue-300 rounded-lg hover:bg-blue-400 font-semibold focus:outline-none text-base mt-4 md:mt-0"
               >
               Sign up
             </Link>
             <Link
               href="/login"
               className="inline-flex items-center  px-4 py-2 border bg-transparent border-indigo-900 hover:bg-indigo-900 hover:text-white font-semibold focus:outline-none text-base mt-4 md:mt-0"
              //  className="inline-flex items-center  px-4 py-2 bg-blue-300 rounded-lg hover:bg-blue-400 font-semibold focus:outline-none text-base mt-4 md:mt-0"
               >
               Log in
             </Link>
               </>
             )
            }

           </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
