import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const authValue = useContext(AuthContext);
  const { googleSignIn, createUserWithEmail } = authValue;

  const handleGoogleBtn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user)
      })
      .catch((err) => {
        console.log(err)
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('executed')
    createUserWithEmail()
      .then((res) => {
        console.log(res, res.user)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div>
      <div className="hero min-h-screen text-white">

        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card w-full max-w-sm shrink-0 shadow-2xl">

            <form className="card-body" onSubmit={handleFormSubmit}>

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
                <button className="btn btn-primary" type="submit">Register</button>
                <h1>Already have an account ? <Link className="btn-link" to="/login">Login</Link></h1>
              </div>

              <div className="flex justify-between items-center">
                <label className="label">
                  <button onClick={handleGoogleBtn} className="btn btn-accent">
                    Google
                  </button>
                </label>

                <label className="label">
                  <button className="btn btn-accent">Facebook</button>
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
