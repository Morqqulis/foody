import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className="container">
      <div className="flex justify-center p-4">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/f/f0/Papa_John%27s_Logo_2019.svg" 
          alt="Restaurant" 
          width={1372} 
          height={537} 
        />
      </div>
      <div className="flex items-center justify-between p-4 bg-gray-7 shadow">
        <div className="flex items-center">
          <div className="ml-4">
            <h1 className="text-xl font-bold">Papa John’s Pizza Restaurant</h1>
            <p className="text-gray-500">19 Nizami street, Sabail, Baku</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div>
            <p className="text-gray-500 text-right">Cuisine</p>
            <p className="text-gray-500">pizza, drink, hotdog, sendvich, roll</p>
          </div>
          <button className="px-4 py-2 border border-red-500 text-red-500 rounded">
            $5 Delivery
          </button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Go Back
          </button>
        </div>
      </div>
    </div>
  )
}

export default Header
