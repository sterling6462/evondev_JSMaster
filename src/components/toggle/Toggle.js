import React, { useState } from "react";
import "./Toggle.css";

// TODO stateless functional components: component nhưng không sử dụng state

// function Toggle() {
//   return <div className="toggle"></div>;
// }

// TODO stateful functional component: component có sử dụng state

// function Toggle2() {
//   const [count, setCount] = useState();
//   return <div className="toggle"></div>;
// }

function Toggle() {
  /* 
  1. enabling state: useState(initialize value)
  2. initialize state: useState(false)
  3. reading state
  4. update state
   */

  const [on, setOn] = useState(false);
  // console.log(on);

  const handleToggle = () => {
    setOn((on) => !on);
  };

  return (
    <div>
      <div className={`toggle ${on ? "active" : ""}`}>
        <div
          className={`spinner ${on ? "active" : ""}`}
          onClick={handleToggle}
        ></div>
      </div>
      <div className="toggle-control">
        <div className="toggle-on" onClick={() => setOn(true)}>
          On
        </div>
        <div className="toggle-off" onClick={() => setOn(false)}>
          Off
        </div>
      </div>
    </div>
  );
}

export default Toggle;
