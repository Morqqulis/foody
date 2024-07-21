import AdminAside from "@sections/Aside/AdminAside";
import SectionHeader from "@sections/Admin/Headers/SectionHeader";
import RestaurantsSection from "@sections/Admin/Restaurants/RestaurantsSection";
import { Button } from "@ui/button";

interface Ipage { }

const RestaurantsAdminPage: React.FC = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px] relative">
      <section>
        <SectionHeader title="Restaurants" />
        <RestaurantsSection />

      </section>
    </main>
  );
};

export default RestaurantsAdminPage;
