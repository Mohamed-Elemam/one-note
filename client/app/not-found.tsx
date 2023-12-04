import Head from "next/head";
import Image from "next/image";
import React from "react";

const notFound = () => {
  return (
    <>
      <Head>
        <title>Page not found</title>
      </Head>
      <div className="flex max-h-[100dvh] gap-2 flex-col items-center justify-center text-center">
        <Image 
        
        src="../public/images/not-found.svg"
        width={400}
        height={400}
        alt="page not found"/>
        <h2 className="text-grey-800 text-2xl ">The page you were looking for doesn&rsquo;t exist.</h2>
        <p>You may have mistyped the address or the page may have moved.</p>
      </div>
    </>
  );
};

export default notFound;
