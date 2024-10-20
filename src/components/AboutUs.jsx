import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Aboutus = () => {
  return (
    <div>
      <Helmet>
        <title>Home | About Us</title>
      </Helmet>

      <h1>About us page</h1>
      <div className="hero bg-blur rounded-3xl w-11/12 mx-auto min-h-screen my-5 block space-y-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://i.ibb.co/tptrzCB/Whats-App-Image-2024-10-17-at-18-44-06-467ff691.jpg"
            className="max-w-sm rounded-lg w-full "
          />
          <div className="text-shadow-3px">
            <h1 className="text-3xl font-bold leading-loose my-3 w-full">
              Hey..! I'm <br />
              <span className="text-4xl">Hassanujjaman Shohag</span>
            </h1>
          </div>
        </div>

        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i.ibb.co/tptrzCB/Whats-App-Image-2024-10-17-at-18-44-06-467ff691.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-full"
          />
          <div className="text-shadow-3px">
            <h1 className="text-3xl font-bold leading-loose my-3">
              Hey..! I'm <br />
              <span className="text-5xl">Tamzid Huda</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="bg-style rounded-xl w-11/12 mx-auto p-3 text-shadow-3px my-4">
        <p className="py-6 mx-auto leading-8">
          <span className="text-3xl">Hey there...!!!</span> <br />
          <span className="text-3xl">W</span>elcome to my cozy corner!{" "}
          <span className="text-3xl">W</span>e're all about creating an evening
          filled with good vibes, great food, and even better company.
          <br />
          <span className="text-3xl">W</span>hether you're here to chill with
          friends or treat yourself with something special, we've got just what
          you need.
          <br />
          <span className="text-3xl">S</span>o, come on in, make yourself
          comfortable, grab a bite, hang out and let's make your taste buds
          dance with delight.
          <br />
          <span className="text-3xl">L</span>et's turn tonight into something
          UNFORGETTABLE
        </p>
      </div>
      <Link to="/">
        <button className="btn badge-ghost bg-transparent text-white hover:text-black">
          Home
        </button>
      </Link>
    </div>
  );
};

export default Aboutus;
