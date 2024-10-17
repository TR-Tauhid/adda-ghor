import { useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Menu = () => {
  const menuItems = useLoaderData();

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

  let variable1 = 0;

  return (
    <div>
      <h1>Menu page.</h1>

      {/* /Create menu */}

      <div>
        <div className="grid md:grid-cols-2 gap-5 my-4 md:m-10 mx-auto w-11/12">
          {menuItems.map((item, key) => {
            return (
              <div
                key={key}
                className="card bg-transparent glass md:card-side shadow-xl outline outline-4 outline-white bg-style"
              >
                <figure>
                  <img src={`${item.photoUrl}`} alt={`${item.title}`} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title justify-center text-3xl">{`${item.title}`}</h2>
                  <div className="flex flex-col items-start mt-5 ">
                    <h2 className="text-left">Cooking time {`${item?.cookingTime} min`}</h2>
                    <p>{`${item.details}`}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Game... */}
      <div className="bg-blur shadow-[rgba(10,9,11,0.45)] shadow-2xl py-20 rounded-3xl  md:w-1/2 mx-auto ">
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
