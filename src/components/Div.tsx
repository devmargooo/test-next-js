import { use } from "react";

export const Div = ({
  dataPromise,
}: {
  dataPromise: Promise<string | number>;
}) => {
  const data = use(dataPromise);
  return <div>{data}</div>;
};
