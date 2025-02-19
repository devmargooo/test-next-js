import { Suspense } from "react";
import { SuspendedDate } from "../components/SuspendedDate";

const SuspendedPage = () => (
  <div className="wrapper">
    <h1>Suspended date</h1>
    <Suspense fallback="Loading...">
      <SuspendedDate />
    </Suspense>
  </div>
);

export default SuspendedPage;
