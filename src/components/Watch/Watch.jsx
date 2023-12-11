import React, { useState } from "react";
import Details from "../Details/Details";

const Watch = () => {
  const [state, setState] = useState(1);

  function increase() {
    const newState = state + 1;
    setState(newState);
  }
  return (
    <div style={{border: '2px solid gray', margin:'20px', padding:'20px'}}>
      <h3>Watch time count by state :{state}</h3>
      <button onClick={increase}>count</button>
      <Details state={state} />
    </div>
  );
};

export default Watch;
