'use client'
import { collections } from '@libs/appwrite/config'
import { useEffect, useState } from 'react'
import { subscribeToCollection } from '../../../../utls/functions'
import SectionHeader from '../Headers/SectionHeaders/SectionHeader'
import RestaurantCard from './RestaurantCard'
const RestaurantsSection: React.FC = (): JSX.Element => {
  const [restaurants, setRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('All')
  useEffect(() => {
    ;(async () => {
      const data = await subscribeToCollection(collections.restaurantsId, setRestaurants)
      setRestaurants(data)
    })()
  }, [])

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredRestaurants(restaurants)
    } else {
      setFilteredRestaurants(restaurants.filter((doc) => doc.category.$id === selectedCategory))
    }
  }, [selectedCategory, restaurants])

  return (
    <section>
      <SectionHeader title="Restaurants" setSelected={setSelectedCategory} />
      <div className="mt-12 flex">
        <div className={`grid grid-cols-4 items-center !gap-6`}>
          {filteredRestaurants?.map((restaurant) => (
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
