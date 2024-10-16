import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";

const Login = () => {
  const authValue = useContext(AuthContext);
  const {
    googleSignIn,
    facebookSignIn,
    signInWithEmail,
    user,
    notifySuccess,
    notifyError,
    notify,
  } = authValue;

  const handleGoogleBtn = () => {
    googleSignIn()
      .then(() => {
        notifySuccess("Google login Successful...!!!");
        setTimeout(() => {
          notify(`Welcome... ${user?.displayName || 'user'}`);
        }, 3000);
      })
      .catch((error) => {
        notifyWarning(error);
      });
  };

  const handleFacebookBtn = () => {
    facebookSignIn()
      .then(() => {
        notifySuccess("Facebook login Successful...!!!");
        setTimeout(() => {
          notify(`Welcome... ${user?.displayName || 'user'}`);
        }, 3000);
      })
      .catch((error) => {
        notifyError(error);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');


    signInWithEmail(email, password)
      .then((res) => {
        console.log(res, res.user);
      })
      .catch((error) => {
        notifyError(error);
      });
  };

  return (
    <div>
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
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-white label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
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
