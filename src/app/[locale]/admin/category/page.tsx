import AdminRightSidebar from '@sections/Admin/Category/CategoryPage'

import SectionHeader from '@sections/Admin/Headers/SectionHeaders/SectionHeader'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'

interface ICategoryPage {}

const CategoryPage: NextPage = (): JSX.Element => {
  const t = useTranslations('Admin.Category')

  return (
    <main className="flex gap-[28px] bg-[#1E1E30]">
      <div className={`flex flex-col w-full`}>
        <SectionHeader title={t("title")} />
          <AdminRightSidebar />
      </div>
    </main>
  )
}

export default CategoryPage
