import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import PrivateRouter from "../routes/PrivateRouter";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logOut, notifySuccess, notifyError, admin } =
    useContext(AuthContext);
  const isActive = (path) => location.pathname === path;

  const handleSignOutBtn = () => {
    logOut()
      .then(() => {
        notifySuccess("Sign Out Successful...!!!");
        navigate("/");
      })
      .catch((error) => {
        notifyError(error.message);
        console.log("error in navbar", error);
      });
  };

  const link = (
    <>
      <li>
        <Link
          className={`menuLink flex justify-center py-3 max-[1020px]:bg-[#00112a87] max-[1020px]:border-y-2   ${
            isActive("/") ? "active" : ""
          }`}
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className={`menuLink flex justify-center py-3 max-[1020px]:bg-[#00112a87] max-[1020px]:border-y-2   ${
            isActive("/menus") ? "active" : ""
          }`}
          to="/menus"
        >
          Menu
        </Link>
      </li>
      <li>
        <Link
          className={`menuLink flex justify-center py-3 max-[1020px]:bg-[#00112a87] max-[1020px]:border-y-2   ${
            isActive("/profiles") ? "active" : ""
          }`}
          to="/profiles"
        >
          Profile
        </Link>
      </li>
      {admin && (
        <PrivateRouter>
          <li>
            <Link
              className={`menuLink flex justify-center py-3 max-[1020px]:bg-[#ff00ff03] max-[1020px]:border-y-2   ${
                isActive("/reviews") ? "active" : ""
              }`}
              to="/reviews"
            >
              Reviews
            </Link>
          </li>

          <li>
            <Link
              className={`menuLink flex justify-center py-3 max-[1020px]:bg-[#00112a87] max-[1020px]:border-y-2   ${
                isActive("/editItems") ? "active" : ""
              }`}
              to="/editItems"
            >
              Edit Items
            </Link>
          </li>
          <li>
            <Link
              className={`menuLink flex justify-center py-3 max-[1020px]:bg-[#00112a87] max-[1020px]:border-y-2   ${
                isActive("/users") ? "active" : ""
              }`}
              to="/users"
            >
              Users
            </Link>
          </li>
        </PrivateRouter>
      )}
      <li>
        <Link
          className={`menuLink flex justify-center py-3 max-[1020px]:bg-[#00112a87] max-[1020px]:border-y-2   ${
            isActive("/aboutus") ? "active" : ""
          }`}
          to="/aboutus"
        >
          About us
        </Link>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu text-shadow-3px space-y-4 bg-style menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <img
            className="w-full md:w-auto box-border scale-150 ml-10 max-h-[4rem] z-0"
            src="/assets/addaGhorLogo.svg"
            alt="adda ghor  logo"
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu bg-style rounded-md gap-x-4 px-5 menu-horizontal ">
            {link}
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handleSignOutBtn}
              className="btn active btn-ghost bg-style hover:border-white"
            >
              Log out
            </button>
          ) : (
            <Link to="/login">
              <button className="btn active btn-ghost bg-style hover:border-white">
                Log in
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
