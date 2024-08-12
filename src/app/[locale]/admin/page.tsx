import DashboardSection from '@sections/Admin/Dashboard/dashboard'
import AdminLogin from '@sections/Admin/Login/AdminLogin'
import { NextPage } from 'next'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Admin.Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

interface IAdminPage {}

const AdminPage: NextPage = async (): Promise<JSX.Element> => {
  return (
    <main className=" flex h-full basis-[calc(100%-280px)] gap-[28px] bg-[#1E1E30]">
      <DashboardSection />
    </main>
  )
}

export default AdminPage
