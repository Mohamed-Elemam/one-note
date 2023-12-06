import Image from "next/image";
import React from "react";
import notFoundImage from "../public/images/not-found.svg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Not found destination | oneNote",
};

const notFound = () => {
  return (
    <>
      <div className="flex max-h-[100dvh] gap-3 flex-col  items-center justify-center text-center padding-top">
        <Image
          className="mt-20"
          src={notFoundImage}
          width={350}
          height={350}
          alt="page not found"
        />
        <h2 className="text-indigo-800 text-2xl ">
          The page you were looking for doesn&rsquo;t exist.
        </h2>
        <p className="text-xl text-grey-500">
          You may have mistyped the address or the page may have moved.
        </p>
      </div>
    </>
  );
};

export default notFound;
