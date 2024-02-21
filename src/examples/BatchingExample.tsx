//Global
import React, { useState } from "react";

const BatchingExample = () => {
  const [state, setState] = useState<number>(0),
    [value, setValue] = useState<number>(0);

  console.log("RENDER");

  const update = () => {
    setTimeout(() => {
      setValue((prev) => prev + 1);
      setState((prev) => prev + 1);
    }, 300);
  };

  return (
    <div>
      <h1>value = {value}</h1>
      <h1>state = {state}</h1>

      <button onClick={update}>UPDATE</button>
    </div>
  );
};

export { BatchingExample };
