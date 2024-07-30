'use client'
import Pagination from '@sections/Paginations/AdminPagination'
import ProductCard from './ProductCard'
import { FC, useEffect, useState } from 'react'
import { getListDocuments, subscribeToCollection } from '../../../../utls/functions'
import { collections } from '@libs/appwrite/config'
import SectionHeader from '../Headers/SectionHeaders/SectionHeader'

const ProductsSection: FC = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1)
  const [productsData, setProductsData] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [selectedRestaurant, setSelectedRestaurant] = useState('All')
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    ;(async () => {
      //   const res = await getListDocuments(collections.productsId)
      const data = await subscribeToCollection(collections.productsId, setProductsData)
      setProductsData(data)
      setFilteredProducts(data)
    })()
  }, [])

  useEffect(() => {
    if (searchValue === '' && selectedRestaurant === 'All') return setFilteredProducts(productsData)

    if (searchValue) {
      return selectedRestaurant === 'All'
        ? setFilteredProducts(productsData.filter((doc) => doc.name.toLowerCase().includes(searchValue.toLocaleLowerCase())))
        : setFilteredProducts(
            productsData.filter(
              (doc) => doc.name.toLowerCase().includes(searchValue.toLocaleLowerCase()) && doc.restaurant.$id === selectedRestaurant
            )
          )
    }

    selectedRestaurant === 'All'
      ? setFilteredProducts(productsData)
      : setFilteredProducts(productsData.filter((doc) => doc.restaurant.$id === selectedRestaurant))
  }, [searchValue, selectedRestaurant, productsData])

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
          <Pagination setCurrentPage={setCurrentPage} dataCount={productsData.length} currentPage={currentPage} perPage={10} />
        )}
      </div>
    </section>
  )
}

export default ProductsSection
