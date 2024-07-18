import AdminAside from '@sections/Admin/Aside/AdminAside'
import { NextPage } from 'next'

interface ICategoryPage {}

const CategoryPage: NextPage = (): JSX.Element => {
  return (
    <main>  <div className="container">
    <AdminAside />
  </div>CategoryPage</main>
  )
}

export default CategoryPage