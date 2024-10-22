import { useContext, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "./Loading";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Menu = () => {
  const menuItems = useLoaderData();
  const { loading } = useContext(AuthContext);

  // Game function
  const [now, setNow] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;
  if (startTime != null && now != null) {
    secondPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <Helmet>
        <title>Home | Menus</title>
      </Helmet>

      <h1>Menu page.</h1>

      {/* /Create menu */}

      <div>
        <div className="grid lg:grid-cols-2 gap-5 my-4 md:m-10 mx-auto w-11/12">
          {loading ? (
            <Loading></Loading>
          ) : (
            menuItems.map((item, key) => {
              return (
                <div
                  key={key}
                  className="card bg-transparent glass md:card-side shadow-xl outline outline-4 outline-white bg-style"
                >
                  <figure className="grow">
                    <img src={`${item.photoUrl}`} alt={`${item.title}`} />
                  </figure>
                  <div className="card-body p-4 pl-8 md:max-w-[30%]">
                    <h2 className="card-title justify-center text-3xl mp-2">{`${item.title}`}</h2>
                    <div className="flex flex-col items-start mt-5">
                      <h2 className="text-left my-3">
                        Cooking time {`${item?.cookingTime} min`}
                      </h2>
                      <p className="text-left">{`${item.details}`}</p>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Game... */}
      <div className="bg-blur shadow-[rgba(10,9,11,0.45)] shadow-2xl py-20 rounded-3xl w-11/12  md:w-1/2 mx-auto ">
        <h1>Time Passed: {secondPassed.toFixed(1)}</h1>

        <div className="flex items-center gap-x-4 justify-center ">
          <button
            onClick={handleStart}
            className="btn border-2 bg-black text-white hover:bg-white hover:text-black rounded-none"
          >
            Start{" "}
          </button>
          <button
            onClick={handleStop}
            className="btn border-2 bg-black text-white hover:bg-white hover:text-black rounded-none"
          >
            Stop{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
