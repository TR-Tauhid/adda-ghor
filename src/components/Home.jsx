import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div className="overflow-hidden pb-10 ">
      <Helmet>
        <title>Home </title>
      </Helmet>
      {/* Welcome Section */}
      <div>
        <div>
          <div
            style={{
              textShadow: "3px 3px 5px black",
            }}
            className=" font-black md:w-[70vw] max-w-[575px] welcome-div py-5 mx-4 md:py-10 text-white"
          >
            <h1 className=" text-center text-6xl p-5 md:text-8xl bg-style rounded-3xl ">
              Welcome
            </h1>
          </div>

          <div
            className="w-fit mx-auto mb-5 relative md:left-[-10%]"
            style={{
              textShadow: "3px 3px 5px black",
            }}
          >
            <h1 className=" text-center justify-around md:justify-end text-3xl md:text-8xl bg-style rounded-3xl p-5 w-fit right-0">
              to
            </h1>
          </div>

          <div className="w-full relative md:left-[10%]">
            <img
              className="mx-auto bg-style rounded-3xl w-[80%] h-[40vh] md:h-auto md:w-auto shadow-2xl "
              src="/assets/addaGhorLogo.svg"
              alt="Adda ghor logo"
            />
          </div>
        </div>
      </div>

      {/* Banner section */}
      <div className="my-24 space-y-10">
        <h1>Follow un on Instagram</h1>
        <div className="w-40 mx-auto">
          <a
            target="_blank"
            href="https://www.instagram.com/adda_ghar24/profilecard/?igsh=MXU1aWk3bmx3MTd5aQ=="
          >
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
