import AdminAside from "@sections/Admin/Aside/AdminAside";

interface Ipage {}

const RestaurantsAdminPage: React.FC = (): JSX.Element => {
  return (
    <main>
      <div className="container">
        <AdminAside />
      </div>
      RestaurantsAdminPage
    </main>
  );
};

export default RestaurantsAdminPage;
