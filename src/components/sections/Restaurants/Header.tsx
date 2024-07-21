import React from 'react'

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white shadow">
      <div>
        <h1 className="text-xl font-bold">Papa John’s Pizza Restaurant</h1>
        <p className="text-gray-500">19 Nizami street, Sabail, Baku</p>
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
  )
}

export default Header
