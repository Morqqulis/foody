import { NextPage } from 'next'
import React from 'react'
import OrderChart from '../../../Charts/OrderChart/OrderChart'
import AmountChart from '../../../Charts/AmountChart/AmountChart'
import LineCharts from '../../../Charts/LineChart/Linechart'

const DashboardSection: NextPage = (): JSX.Element => {
    return (
        <section className=' h-min flex flex-col bg-green-300'>
            <div className="flex">
                <div className="card bg-gray-700 w-7/12 p-1 m-1">
                    <OrderChart  />
                </div>
                <div className="card bg-gray-700 w-5/12 p-1 m-1">
                    <OrderChart />
                </div>
            </div>
            <div className="row">
                <div className="card bg-gray-700 w-5/12 p-1 m-1 h-min">
                    <AmountChart/>
                </div>
            </div>
        </section>
    )
}

export default DashboardSection