import RestAside from '@sections/Aside/RestAside';
import React, { FC } from 'react'
import RestaurantELements from './RestaurantELements';


export const RestaurantSection: FC = (): JSX.Element => {

  return (
    <div className='p-5 flex'>
        <RestAside/>
        <RestaurantELements/>
    </div>
  )
}
