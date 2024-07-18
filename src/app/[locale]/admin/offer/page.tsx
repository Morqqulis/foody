import AdminAside from "@sections/Admin/Aside/AdminAside";
import { NextPage } from "next";

interface IOffersPage {}

const OfferPage: NextPage = (): JSX.Element => {
  return (
    <main>
      {" "}
      <div className="container">
        <AdminAside />
      </div>
      page
    </main>
  );
};

export default OfferPage;
