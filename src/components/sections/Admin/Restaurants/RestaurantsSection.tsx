'use client'
import { collections } from '@libs/appwrite/config'
import { useEffect, useState } from 'react'
import { subscribeToCollection } from '../../../../utls/functions'
import SectionHeader from '../Headers/SectionHeaders/SectionHeader'
import RestaurantCard from './RestaurantCard'
const RestaurantsSection: React.FC = (): JSX.Element => {
  const [restaurants, setRestaurants] = useState([]) // Corrected spelling from 'restaurans' to 'restaurants'
  const [selectedCategory, setSelectedCategory] = useState('All')
  useEffect(() => {
    ;(async () => {
      const data = await subscribeToCollection(collections.restaurantsId, setRestaurants)
      setRestaurants(data)
    })()
  }, [])
  
  useEffect(() => {
    if (selectedCategory === 'All') {
      setRestaurants((prev) => [...prev]) // Reset to original data when 'All' is selected
    } else {
      setRestaurants((prev) => prev.filter((doc) => doc.category.$id === selectedCategory))
    }
  }, [selectedCategory])
  return (
    <section>
      <SectionHeader title="Restaurants" setSelected={setSelectedCategory} />
      <div className="mt-12 flex">
        <div className={`grid grid-cols-4 items-center !gap-6`}>
          {restaurants?.map((restaurant) => (
            <div key={restaurant.$id} className="animate-fade-in">
              <RestaurantCard prop={restaurant} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
export default RestaurantsSection
