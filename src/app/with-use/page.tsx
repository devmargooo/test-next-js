import { Suspense } from "react";
import { Div } from "../../components/Div";

const timestampPromise = fetch("http://localhost:3001/hello", {
  method: "GET",
  cache: "no-store",
}).then((res) => res.text());

const WithUsePage = () => {
  return (
    <div className="wrapper">
      <h1>Streaming with use</h1>
      <Suspense fallback="Loading...">
        <Div dataPromise={timestampPromise} />
      </Suspense>
    </div>
  );
};

export default WithUsePage;
