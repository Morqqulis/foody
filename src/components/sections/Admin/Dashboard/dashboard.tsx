import { NextPage } from 'next'
import React from 'react'
import OrderChart from '../../../Charts/OrderChart/OrderChart'
import AmountChart from '../../../Charts/AmountChart/AmountChart'
import LineCharts from '../../../Charts/LineChart/Linechart'

const DashboardSection: NextPage = (): JSX.Element => {
    return (
        <section className='pl-3 h-min flex flex-col'>
            <div className="flex">
                <div className="card bg-gray-800 w-7/12 p-1 m-1 rounded-3xl">
                    <div className=' text-gray-400 p-3 font-thin'>Products</div>
                    <AmountChart/>
                </div>
                <div className="card bg-gray-800 w-5/12 p-1 m-1 rounded-3xl">
                    <div className=' text-gray-400 p-3 font-thin'>Restaurants</div>
                    <OrderChart />
                </div>
            </div>
            <div className="flex">
                <div className="card bg-gray-800 w-5/12 p-1 m-1 h-min rounded-3xl">
                    <div className=' text-gray-400 p-3 font-thin'>Line</div>
                    <LineCharts/>
                </div>
                <div className="card bg-gray-800 w-7/12 p-1 m-1 rounded-3xl"></div>
            </div>
        </section>
    )
}

export default DashboardSection