import React, { useState } from "react";

const Counting = () => {
  const [count, setCount] = useState(0);

  const Decrement = () => {
    return setCount(count - 1);
  };
  const Increment = () => {
    return setCount(count + 1);
  };

  const Reset = () => {
    return setCount(0);
  };
  return (
    <div className="w-100% h-screen bg-slate-800 text-white  flex justify-center items-center">
      <div>
        <div>
          <h2>Increment & Decreament</h2>
        </div>
        <div className="text-white">
          <button
            onClick={Decrement}
            className="  px-4 bg-white  text-black rounded-sm m-3"
          >
            -
          </button>
          <button className="px-4 bg-white  text-black rounded-sm m-3">
            {count}
          </button>
          <button
            onClick={Increment}
            className="px-4 bg-white  text-black rounded-sm m-3"
          >
            +
          </button>
        </div>
        <button
          onClick={Reset}
          className="px-4 bg-white  text-black rounded-sm"
        >
          {" "}
          Reset
        </button>
        <div></div>
      </div>
    </div>
  );
};

export default Counting;
