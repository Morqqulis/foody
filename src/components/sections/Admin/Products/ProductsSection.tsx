'use client'
import { collections } from '@libs/appwrite/config'
import Pagination from '@sections/Paginations/AdminPagination'
import { FC, useEffect, useState } from 'react'
import { getListDocuments, subscribeToCollection } from '../../../../utls/functions'
import SectionHeader from '../Headers/SectionHeaders/SectionHeader'
import ProductCard from './ProductCard'
const ProductsSection: FC = (): JSX.Element => {
  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState('All')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    ;(async () => {
      const data = await subscribeToCollection(collections.productsId, setProducts)
      setProducts(data)
    })()
  }, [])

  useEffect(() => {
    if (searchValue === '' && selectedRestaurant === 'All') return setFilteredProducts(products)
    if (searchValue) {
      return selectedRestaurant === 'All'
        ? setFilteredProducts(products.filter((doc) => doc.name.toLowerCase().includes(searchValue.toLowerCase())))
        : setFilteredProducts(
            products.filter((doc) => doc.name.toLowerCase().includes(searchValue.toLowerCase()) && doc.restaurant.$id === selectedRestaurant)
          )
    }
    selectedRestaurant === 'All'
      ? setFilteredProducts(products)
      : setFilteredProducts(products.filter((doc) => doc.restaurant.$id === selectedRestaurant))
  }, [searchValue, selectedRestaurant, products])
  const productsPerPage = 10
  const firstIndex = (currentPage - 1) * productsPerPage
  const secondIndex = currentPage * productsPerPage
  const newProducts = filteredProducts.slice(firstIndex, secondIndex)
  return (
    <section className={`w-full`}>
      <SectionHeader title="Products" setSelected={setSelectedRestaurant} setSearchValue={setSearchValue} />
      <div className="flex w-full max-w-[1124px] flex-col items-center justify-center px-0 pt-10">
        <div className="flex w-full flex-wrap gap-[35px]">
          {newProducts.map((product) => (
            <div key={product.$id} className="animate-fade-in scale-95 transition-transform duration-300 hover:scale-100">
              <ProductCard prod={product} />
            </div>
          ))}
        </div>
        {filteredProducts.length > productsPerPage && (
          <Pagination setCurrentPage={setCurrentPage} dataCount={products.length} currentPage={currentPage} perPage={10} />
        )}
      </div>
    </section>
  )
}
export default ProductsSection
