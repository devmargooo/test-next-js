"use client";

import { useState } from "react";
import { getServerTime } from "../actions/getServerTime";

export const WithServerAction = () => {
  const [date, setDate] = useState("");

  const getTime = () => {
    getServerTime().then(setDate);
  };

  return (
    <>
      <button type="button" onClick={getTime}>
        Click me!
      </button>
      {date && <div>Date from server: {date}</div>}
    </>
  );
};
