export const revalidate = 0;
import { DefferedCurrentDate } from "../../components/DefferedCurrentDate";

const DefferedServerComponentPage = () => (
  <div className="wrapper">
    <h1>Deffered component date</h1>
    {/* @ts-expect-error Server Component */}
    <DefferedCurrentDate />
  </div>
);

export default DefferedServerComponentPage;
