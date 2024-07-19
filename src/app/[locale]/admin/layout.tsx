import AdminAside from "@sections/Admin/Aside/AdminAside";
import AdminHeader from "@sections/Admin/Headers/AdminHeader";

interface IAdminLayout {
  children: React.ReactNode;
  params: { locale: string };
}

const AdminLayout: React.FC = ({ children, params: { locale } }: IAdminLayout) => {
  return (
    <div className={`wrapper bg-[#1E1E30]`}>
      <div className="container">
        <AdminHeader />
        <div className={`flex items-start gap-4`}>
          <AdminAside />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
