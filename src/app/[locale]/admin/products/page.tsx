import { NextPage } from 'next'
import ProductsSection from '../../../../components/sections/Admin/Products/ProductsSection'

const ProductsPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <ProductsSection />
    </main>
  )
}

export default ProductsPage
