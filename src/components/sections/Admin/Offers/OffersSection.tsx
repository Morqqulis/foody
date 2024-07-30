'use client'
import React, { useEffect, useState } from 'react'
import { NextPage } from 'next'
import { Pencil } from 'lucide-react'
import Table from '@sections/Admin/Table'
import { useTranslations } from 'next-intl'
import SectionHeader from '../Headers/SectionHeaders/SectionHeader'
import ReusableSheet from '@sections/Admin/Sheet/ReusableSheet'
import { getListDocuments, subscribeToCollection } from '../../../../utls/functions'
import { collections } from '@libs/appwrite/config'
import DeleteModal from '../DeleteModal/DeleteModal'
import Pagination from '@sections/Paginations/AdminPagination'

interface Offer {
  id: string
  title: string
  description: string
  image: string
}

const OffersPage: NextPage = (): JSX.Element => {
  const [offers, setOffers] = useState<Offer[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 5

  const t = useTranslations('Admin.Offers')

  useEffect(() => {
    ;(async () => {
      const data: any = await subscribeToCollection(collections.offersId, setOffers)
      setOffers(data)
    })()
  }, [])

  const header = [t('id'), t('image'), t('titleColumn'), t('description'), t('actions')]

  const body = offers
    .map((offer: any) => {
      const { title, description, image } = JSON.parse(offer.offer)
      const { $id: id } = offer

      return {
        id,
        image,
        title,
        description,
        actions: (
          <div className="flex items-center gap-2">
            <ReusableSheet whatIs="EditOffer" trigger={<Pencil size={21} className="cursor-pointer text-green-500" />} id={id} />
            <DeleteModal collectionId={collections.offersId} deletedId={id} />
          </div>
        )
      }
    })
    .slice((currentPage - 1) * perPage, currentPage * perPage)

  return (
    <section className={`w-full`}>
      <SectionHeader title={t('title')} />
      <Table headers={header} body={body} />
      {offers.length > perPage && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} dataCount={offers.length} perPage={perPage} />
      )}
    </section>
  )
}

export default OffersPage
