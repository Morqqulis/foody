import AdminAside from "@sections/Aside/AdminAside";
import AdminHeader from "@sections/Admin/Headers/AdminHeader";
import { Toaster } from "@ui/toaster";

interface IAdminLayout {
  children: React.ReactNode;
  params: { locale: string };
}
export const dynamic = "force-dynamic";
export const revalidate = 0;
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
      <Toaster />
    </div>
  );
};

export default AdminLayout;
