import AdminAside from "@sections/Admin/Aside/AdminAside";
import SectionHeader from "@sections/Admin/Headers/SectionHeader";
import RestaurantsSection from "@sections/Admin/Restaurants/RestaurantsSection";

interface Ipage { }

const RestaurantsAdminPage: React.FC = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <AdminAside />
      <section>
        <SectionHeader title="Restaurants" />
        <RestaurantsSection />
      </section>
    </main>
  );
};

export default RestaurantsAdminPage;
