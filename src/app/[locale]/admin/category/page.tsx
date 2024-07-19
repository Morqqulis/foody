import AdminRightSidebar from '@sections/Admin/Category/CategoryPage'

import { NextPage } from 'next'

interface ICategoryPage {}

const CategoryPage: NextPage = (): JSX.Element => {
  return (
    <main>  
    <div className="container">
  
    <AdminRightSidebar />
  </div>
  </main>
  )
}

export default CategoryPage