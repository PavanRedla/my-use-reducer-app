"use client";
import React, { useContext, useState } from "react";
import { appCtx } from "@/statemanagement/appContext";

const B = () => {
  const [loc, setLoc] = useState("");
  const ctxData = useContext(appCtx);
  const handleChange = (eve) => {
    setLoc(eve?.target?.value);
  };
  const handleClick = () => {
    // alert(loc);
    // dispatch the data
    ctxData.dispatch({ type: "LOC_UPDATE", payload: loc });
  };
  return (
    <div>
      <h1>B</h1>
      <p>
        Location: <input onChange={handleChange} />
      </p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default B;
