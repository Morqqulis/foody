import AdminHeader from '@sections/Admin/Headers/AdminHeader'
import AdminAside from '@sections/Aside/AdminAside'
import { Toaster } from '@ui/toaster'

interface IAdminLayout {
  children: React.ReactNode
  params: { locale: string }
}

const AdminLayout: React.FC = ({ children, params: { locale } }: IAdminLayout) => {
  return (
    <div className={`wrapper bg-[#1E1E30] `}>
      <div className="container">
        <AdminHeader />
        <div className={`h-full min-h-[calc(100vh-120px)] items-start gap-4 md:grid md:grid-cols-[256px_1fr]`}>
          <AdminAside className="mmd:hidden" />
          {children}
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default AdminLayout
