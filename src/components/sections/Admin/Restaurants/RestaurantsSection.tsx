'use client'
import { collections } from '@libs/appwrite/config'
import { useEffect, useState } from 'react'
import { getListDocuments } from '../../../../utls/functions'
import SectionHeader from '../Headers/SectionHeaders/SectionHeader'
import RestaurantCard from './RestaurantCard'

const RestaurantsSection: React.FC = (): JSX.Element => {
  const [restaurans, setRestaurans] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')

  useEffect(() => {
    ;(async () => {
      const { documents } = await getListDocuments(collections.restaurantsId)
      selectedCategory === 'All' ? setRestaurans(documents) : setRestaurans(documents.filter((doc) => doc.category.$id === selectedCategory))
    })()
  }, [selectedCategory])

  return (
    <section className={``}>
      <SectionHeader title="Restaurants" setSelected={setSelectedCategory} />
      <div className="mt-12 flex">
        {restaurans.length === 0 && <p>No data</p>}
        <div className={`grid grid-cols-4 items-center !gap-6 `}>{restaurans?.map((restaurant) => <RestaurantCard key={restaurant.$id} prop={restaurant} />)}</div>
      </div>
    </section>
  )
}

export default RestaurantsSection
