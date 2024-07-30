import AdminRightSidebar from '@sections/Admin/Category/CategoryPage'

import SectionHeader from '@sections/Admin/Headers/SectionHeaders/SectionHeader'
import { NextPage } from 'next'
import { Suspense } from 'react'

interface ICategoryPage {}

const CategoryPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <div className="container">
        <SectionHeader title="Category" />
        <Suspense fallback={<div>Loading...</div>}>
          <AdminRightSidebar />
        </Suspense>
      </div>
    </main>
  )
}

export default CategoryPage
