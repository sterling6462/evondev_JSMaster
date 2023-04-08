import React, { useState } from "react";

export const Counter = () => {
  //stale state
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setTimeout(function delay() {
      setCount((count) => count + 1);
    }, 1000);
  };

  return <div onClick={handleIncrement}>Counter {count}</div>;
};
