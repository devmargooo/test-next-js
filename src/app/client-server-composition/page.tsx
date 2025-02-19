import { ClientCurrentDate } from "../components/ClientCurrentDate";
import { CurrentDate } from "../components/CurrentDate";

const ClientServerCompositionPage = () => (
  <div className="wrapper">
    <h1>Client server composition</h1>
    <ClientCurrentDate>
      <CurrentDate />
    </ClientCurrentDate>
  </div>
);

export default ClientServerCompositionPage;
