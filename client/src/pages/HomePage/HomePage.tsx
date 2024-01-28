import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export default function Home() {
  const { userToken } = useContext(AuthContext);

  return (
    <>
      <section className=" min-h-[100dvh] home-page ">
        <div className="flex flex-col items-center justify-center max-w-xl  mx-auto pb-0 text-center pt-32 ">
          <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
            The simplest way to take notes
          </h1>

          <p className="mb-8 font-medium leading-relaxed text-gray-700 text-xl md:mb-12 xl:text-lg">
            All your Capturing thoughts, one note at time because great ideas
            deserve a place to grow
          </p>

          <div className=" w-full ">
            {userToken ? (
              <Link
                to="/notes"
                className="inline-block rounded-lg bg-indigo-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-800 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Create note
              </Link>
            ) : (
              <Link
                to="/signup"
                className="inline-block rounded-lg bg-indigo-700 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-800 focus-visible:ring active:bg-indigo-700 md:text-base"
              >
                Sign up now
              </Link>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
