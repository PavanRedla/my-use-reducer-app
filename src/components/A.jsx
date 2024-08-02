"use client";
import React, { useContext, useRef } from "react";
import { appCtx } from "@/statemanagement/appContext";

const A = () => {
  const nameRef = useRef;
  const ctxData = useContext(appCtx);
  const handleChange = (eve) => {
    nameRef.current = eve?.target?.value;
  };
  const handleClick = () => {
    // alert(nameRef.current);
    // dispatch the data
    ctxData.dispatch({ type: "NAME_UPDATE", payload: nameRef.current });
  };
  return (
    <div>
      <h1>A</h1>
      <p>
        Name: <input onChange={handleChange} />
      </p>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};

export default A;
