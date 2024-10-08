import { useRef, useState } from "react";

const Menu = () => {
  const [now, setNow] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const intervalRef = useRef(null);

  const inputRef = useRef(null);

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
    console.log(secondPassed);
  }

 let variable1 = 0;
 console.log(variable1)

  return (
    <div>
      <h1>Menu page.</h1>

      {/* /Create menu */}
      <div>
        <div>
          
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
