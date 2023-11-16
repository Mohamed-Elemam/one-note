"use client";

import Link from "next/link";
import Loading from "./components/Loading/Loading";
import ModalBody from "./components/ModalBody/ModalBody";

export default function Home() {
  return (
    <>
      <main className=" bg-indigo-50 min-h-screen  ">
        <div className="container mx-auto px-5 py-24">
          <div className="grid md:grid-cols-2 sm:grid-col-1" >
            <div className="flex flex-col gap-10">
              <h1 className="text-7xl font-bold  text-indigo-900">
                OneNote
              </h1>
              <p className="text-indigo-900 font-semibold text-2xl">
              <span className="text-3xl">&#34;</span>Capturing thoughts, one note at a time - because great ideas deserve a place to grow. <span className="text-3xl">&#34;</span>
            <p className="my-1">- Albert Einstein</p>
              </p>
              <Link
                href={"/signup"}
                className="inline  focus:outline-none px-4 py-2.5  font-semibold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800"
              >
                Get Started
              </Link>
            </div>

            <div></div>
          </div>
        </div>
      </main>

      {/* <ModalBody/> */}
    </>
  );
}
