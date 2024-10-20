import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profiles = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Helmet>
        <title>Home | Profiles</title>
      </Helmet>

      <h1>Profile Page</h1>
      <div className="hero bg-blur rounded-3xl w-11/12 mx-auto min-h-screen my-5">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={
              user?.photoURL ||
              "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            }
            className="max-w-sm rounded-lg shadow-2xl min-w-[30%]"
            alt="profile image"
          />
          <div>
            <h1 className="text-5xl font-bold">
              {user?.displayName || "Unnamed"}
            </h1>

            <p className="py-6">{user?.email}</p>
            <Link to="/">
              <button className="btn badge-ghost bg-transparent text-white hover:text-black">
                Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profiles;
