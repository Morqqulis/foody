import { NextPage } from 'next'
import React, { PureComponent} from 'react'
import OrderChart from '../../../Charts/OrderChart'
import AmountChart from '../../../Charts/AmountChart'

const DashboardSection: NextPage = (): JSX.Element => {
    return (
        <section className='overflow-scroll h-screen flex flex-col bg-green-300'>
            <div className="flex">
                <div className="card bg-gray-700 w-7/12 p-1 m-1">
                    <OrderChart />
                </div>
                <div className="card bg-gray-700 w-5/12 p-1 m-1">
                    <OrderChart />
                </div>
                <div >
                    <AmountChart/>
                </div>
            </div>

        </section>
    )
}

export default DashboardSection