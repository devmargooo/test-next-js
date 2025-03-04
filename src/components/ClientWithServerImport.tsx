"use client";
import { useEffect, useState } from "react";
import { CurrentDate } from "./CurrentDate";

export const ClientWithServerImport = () => {
  const [date, setDate] = useState(Date.now());
  useEffect(() => {
    setDate(Date.now());
  }, []);
  return (
    <>
      <p>Client with server import. Timestamp: {date}</p>
      <CurrentDate />
    </>
  );
};
