"use client";
import React, { useContext } from "react";
import { appCtx } from "@/statemanagement/appContext";

const C = () => {
  const ctxData = useContext(appCtx);
  // consume the data from context
  return (
    <div>
      <h1>C</h1>
      <h3>Name:{ctxData.state.name}</h3>
      <h3>Location:{ctxData.state.loc}</h3>
    </div>
  );
};

export default C;
