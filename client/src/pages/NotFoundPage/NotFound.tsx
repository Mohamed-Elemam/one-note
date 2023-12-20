import { Helmet } from "react-helmet";
import notFoundImage from "../../../public/images/not-found.svg";

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>404 Not found | oneNote</title>
      </Helmet>
      <div className="flex max-h-[100dvh]  gap-3 flex-col  items-center justify-center text-center padding-top">
        <img
          className="mt-20 w-50 h-50"
          src={notFoundImage}
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

export default NotFound;
