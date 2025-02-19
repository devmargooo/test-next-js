"use client";
import { useEffect, useState } from "react";

export const ClientCurrentDate = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [date, setDate] = useState(Date.now());
  useEffect(() => {
    setDate(Date.now());
  }, []);
  return (
    <>
      <p>Current date (client): {date}</p>
      {children}
    </>
  );
};
