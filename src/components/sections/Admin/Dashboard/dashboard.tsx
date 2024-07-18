import { NextPage } from 'next'
import React from 'react'
import OrderChart from '../../../Charts/OrderChart'

const DashboardSection: NextPage = (): JSX.Element => {
  return (
    <section className='overflow-scroll h-screen w-[1000px] flex justify-center flex-col'>
        <div className="card bg-gray-700 wid">
            <OrderChart />
        </div>
        <div className="card bg-gray-700 wid">
            <OrderChart />
        </div>
        <div className="card bg-gray-700 wid">
            <OrderChart />
        </div>
        <div className="card bg-gray-700 wid">
            <OrderChart />
        </div>
    </section>
  )
}

export default DashboardSection