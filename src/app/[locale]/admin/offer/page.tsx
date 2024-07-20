import SectionHeader from "@sections/Admin/Headers/SectionHeader";
import { NextPage } from "next";

interface IOffersPage {}

const OfferPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <section>
        <SectionHeader title="Restaurants" />
        offer
      </section>
    </main>
  );
};

export default OfferPage;
