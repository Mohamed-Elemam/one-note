"use client";

import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className=" bg-indigo-50 min-h-screen  ">
        <div className="container mx-auto px-5 py-24">
          <div className="grid md:grid-cols-2 sm:grid-col-1">
            <div className="flex flex-col gap-10 items-start">
              <h1 className="text-7xl font-bold  text-indigo-900">OneNote</h1>
              <div>
                <p className="text-indigo-900 font-semibold text-2xl">
                  <span className="text-3xl">&#34;</span>Capturing thoughts, one
                  note at a time - because great ideas deserve a place to grow.{" "}
                  <span className="text-3xl">&#34;</span>
                </p>
                <p className="text-indigo-900 font-semibold text-2xl mt-5">
                  Albert Einstein
                </p>
              </div>
              <Link
                href={"/signup"}
                className="inline  focus:outline-none px-4 py-2.5  font-semibold text-white bg-indigo-700 rounded-lg hover:bg-indigo-800"
              >
                Get Started
              </Link>
            </div>

            <div>
              <Image
                width={500}
                height={500}
                src="public\images\Notes-pana.svg"
                alt="taking-notes"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
