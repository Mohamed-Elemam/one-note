"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="bg-indigo-50 min-h-[100dvh] pb-6 sm:pb-8 lg:pb-12 ">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col items-center justify-center">
            <div className="flex max-w-xl flex-col items-center pb-0 pt-8 text-center justify-center sm:pb-16 lg:pb-32 lg:pt-32">
              <p className="mb-4 font-semibold text-indigo-800 md:mb-6 md:text-lg xl:text-xl">
                Very proud to introduce
              </p>

              <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
                The no.1 way to take notes
              </h1>

              <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 xl:text-lg">
                All your Capturing thoughts, one note at a time - because great
                ideas deserve a place to grow
              </p>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <Link
                  href="/signup"
                  className="inline-block rounded-lg bg-indigo-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-800 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Sign up now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
