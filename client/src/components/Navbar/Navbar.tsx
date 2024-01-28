import { FcViewDetails } from "react-icons/fc";
import { Navbar } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const NavbarComponent = () => {
  const { userToken, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("userData");
    setUser!({ userId: "", userName: "", userToken: "" });
    navigate("/");
  };

  return (
    <>
      <Navbar fluid className="fixed top-0 w-[100%] left-0 z-50">
        <Navbar.Brand className="items-center rtl:space-x-reverse flex-1">
          <Link to="/" className="flex gap-2">
            <span className="text-3xl">
              <FcViewDetails />
            </span>
            <span className="text-2xl font-semibold whitespace-nowrap hover:text-indigo-900">
              One<span className="text-indigo-900">Note</span>
            </span>
          </Link>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse className="items-start">
          <div>
            {userToken ? (
              <Link
                to="/"
                className=" rounded-lg  px-4 py-2 border bg-transparent border-indigo-800 hover:bg-indigo-800 focus:ring-blue-700 focus:ring transition-all hover:text-white  focus:outline-none text-base mt-4 md:mt-0"
                onClick={handleLogout}
              >
                Log out
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className=" rounded-lg  px-4 py-2 border bg-transparent border-indigo-800 hover:bg-indigo-800 focus:ring-blue-700 focus:ring transition-all hover:text-white font-semibold focus:outline-none text-base mt-4 md:mt-0"
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
