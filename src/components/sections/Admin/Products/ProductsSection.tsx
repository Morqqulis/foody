'use client'
import Pagination from '@sections/Paginations/AdminPagination'
import ProductCard from './ProductCard'
import { FC, useEffect, useState } from 'react'
import { subscribeToCollection } from '../../../../utls/functions'
import { collections } from '@libs/appwrite/config'
import SectionHeader from '../Headers/SectionHeaders/SectionHeader'

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
        ? setFilteredProducts(products.filter((doc) => doc.name.toLowerCase().includes(searchValue.toLocaleLowerCase())))
        : setFilteredProducts(
            products.filter((doc) => doc.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) && doc.restaurant.$id === selectedRestaurant)
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
    <section>
      <SectionHeader title="Products" setSelected={setSelectedRestaurant} setSearchValue={setSearchValue} />
      <div className="flex w-full max-w-[1124px] flex-col items-center justify-center   px-0 pt-[52px] ">
        <div className="flex w-full flex-wrap gap-[35px]">
          {newProducts.map((product) => (
            <ProductCard prod={product} key={product.$id} />
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
