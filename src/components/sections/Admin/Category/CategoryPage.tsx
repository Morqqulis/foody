'use client'
import { collections } from '@libs/appwrite/config'
import ReusableSheet from '@sections/Admin/Sheet/ReusableSheet'
import { Pencil } from 'lucide-react'
import { deleteDocument, subscribeToCollection } from '../../../../utls/functions'
import DeleteModal from '../DeleteModal/DeleteModal'
import Table from '../Table'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'
import Pagination from '@sections/Paginations/AdminPagination'

const CategoryPage = () => {
  const [categories, setCategories] = useState([])
  const [filteredCategories, setFilteredCategories] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 5

  const t = useTranslations('Admin.Category')
  useEffect(() => {
    ;(async () => {
      const data = await subscribeToCollection(collections.categoriesId, setCategories)
      const filteredData = data
        .map((item: any) => ({
          id: item.$id,
          image: item.image,
          name: item.name,
          slug: item.slug,
          actions: (
            <div className=" flex items-center gap-2 px-4 py-2">
              <ReusableSheet trigger={<Pencil size={16} className="cursor-pointer text-[#00B2A9]" />} whatIs="EditCategory" id={item.$id} />
              <DeleteModal collectionId={item.$collectionId} deletedId={item.$id} />
            </div>
          )
        }))
        .slice((currentPage - 1) * perPage, currentPage * perPage)

      setFilteredCategories(filteredData)
    })()
  }, [categories, currentPage])

  return (
    <div className=" h-full w-full ">
      <Table headers={['ID', 'Image', 'Name', 'Slug', '']} body={filteredCategories} />
      <div className="flex w-full justify-center ">
        {categories.length > perPage && (
          <Pagination dataCount={categories.length} perPage={perPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
        )}
      </div>
    </div>
  )
}

export default CategoryPage
