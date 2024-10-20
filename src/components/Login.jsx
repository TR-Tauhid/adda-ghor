import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import Loading from "./Loading";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const authValue = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    loading,
    googleSignIn,
    facebookSignIn,
    signInWithEmail,
    notifySuccess,
    notifyError,
    setLoading,
  } = authValue;

  const handleError = (message) => {
    notifyError(message);
    setLoading(false);
  };

  const addClientToDB = (user) => {
    if (user) {
      const email = user.email;
      const name = user.displayName;
      const uid = user.uid;
      const userData = { email, name, uid };

      fetch(`https://adda-ghor-backend-7p7zfb6i0-tr-tauhids-projects.vercel.app/login/${uid}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((result) => {
          if (
            result.upsertedCount > 0 ||
            result.modifiedCount > 0 ||
            result.matchedCount === 1
          ) {
            notifySuccess("Client added to database...!!!");
          }
        })
        .catch((error) => {
          notifyError(error.message);
        });
    }
  };

  const handleGoogleBtn = () => {
    googleSignIn()
      .then((result) => {
        addClientToDB(result.user);
        notifySuccess("Google login Successful...!!!");
        navigate("/");
      })
      .catch((error) => {
        handleError(error.message);
      });
  };

  const handleFacebookBtn = () => {
    facebookSignIn()
      .then((result) => {
        addClientToDB(result.user);
        notifySuccess("Facebook login Successful...!!!");
        navigate("/");
      })
      .catch((error) => {
        handleError(error.message);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    signInWithEmail(email, password)
      .then((result) => {
        addClientToDB(result.user);
        notifySuccess("Login Successful...!!!");
        navigate("/");
      })
      .catch((error) => {
        handleError(error.message);
      });
  };

  return (
    <div>
      <Helmet>
        <title>Home | Login</title>
      </Helmet>

      <div className="mx-auto ">{loading && <Loading />}</div>

      <div className="hero text-white bg-blur rounded-3xl mt-5 md:mt-10 mx-auto w-11/12 md:w-2/3">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card w-full max-w-sm shrink-0">
            <form
              onSubmit={handleFormSubmit}
              className="card-body p-0 md:p-5 md:py-10"
            >
              <div className="form-control">
                <label className="label">
                  <span className="text-white label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  maxLength={40}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-white label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  maxLength={15}
                  className="input input-bordered"
                  required
                />

                <div className="form-control">
                  <label className="label">
                    <span className="text-white label-text">
                      Conform password
                    </span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="conform password"
                    maxLength={15}
                    className="input input-bordered"
                  />
                </div>
                <label className="label">
                  <a
                    href="#"
                    className="text-white label-text-alt link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn btn-ghost border-4 py-4 h-auto border-white hover:border-black bg-black hover:bg-white hover:text-black">
                  Login
                </button>

                <div className="my-4 text-shadow-3px">
                  <h1>
                    Don&apos;t have an account ?
                    <Link
                      className="btn-link pl-4 text-yellow-200"
                      to="/register"
                    >
                      Register
                    </Link>
                  </h1>
                </div>
              </div>

              <div className="text-shadow-3px">
                <h1>Or, continue with ...</h1>
              </div>

              <div className="flex justify-around items-center  rounded-full my-5">
                <label className="label">
                  <button
                    type="button"
                    onClick={handleGoogleBtn}
                    className="btn btn-ghost bg-black w rounded-full text-5xl p-4 h-auto"
                  >
                    <FcGoogle />
                  </button>
                </label>
                <label className="label">
                  <button
                    type="button"
                    onClick={handleFacebookBtn}
                    className="btn btn-ghost bg-black w rounded-full text-5xl p-4 h-auto"
                  >
                    <SiFacebook></SiFacebook>
                  </button>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
