import { NextPage } from 'next'
import ProductsSection from '../../../../components/sections/Admin/Products/ProductsSection'

const ProductsPage: NextPage = (): JSX.Element => {
  return (
    <main className="bg-[#1E1E30]">
      <ProductsSection />
    </main>
  )
}

export default ProductsPage
