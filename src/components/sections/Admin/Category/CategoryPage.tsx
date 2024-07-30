'use server'
import { collections } from '@libs/appwrite/config'
import ReusableSheet from '@sections/Admin/Sheet/ReusableSheet'
import { Pencil } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { getListDocuments } from '../../../../utls/functions'
import DeleteModal from '../DeleteModal/DeleteModal'
import Table from '../Table'

type Category = {
  id: number
  image: string
  name: string
  slug: string
  actions: any
}

const filteredData = (data: any) => {
  return data.map((item: any) => ({
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
}

const CategoryPage = async () => {
  const t = getTranslations('Admin.Category')
  const data = filteredData((await getListDocuments(collections.categoriesId)).documents)
  if (data.length > 0) {
    return (
      <div className=" h-full w-full ">
        <Table headers={['ID', 'Image', 'Name', 'Slug', '']} body={data} />
      </div>
    )
  } else {
    return <div>Empty</div>
  }
}

export default CategoryPage
