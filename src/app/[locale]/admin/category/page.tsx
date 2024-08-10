import AdminRightSidebar from '@sections/Admin/Category/CategoryPage'

import SectionHeader from '@sections/Admin/Headers/SectionHeaders/SectionHeader'
import { NextPage } from 'next'

interface ICategoryPage {}

const CategoryPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30]">
      <div className={`flex flex-col w-full`}>
        <SectionHeader title="Category" />
          <AdminRightSidebar />
      </div>
    </main>
  )
}

export default CategoryPage
