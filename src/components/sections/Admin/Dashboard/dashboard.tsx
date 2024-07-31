import React from 'react'
import OrdersChart from './OrdersChart'
import SalaryChart from './SalaryChart'
import { useTranslations } from 'next-intl'

const DashboardSection: React.FC = (): JSX.Element => {
  const t = useTranslations('DashboardSection')

  return (
    <section className="flex h-full w-full flex-col gap-6">
      <div className={`min-h-1/2 flex h-full items-start justify-between gap-[30px] mmd:flex-col`}>
        <OrdersChart />
        <SalaryChart />
      </div>
      <div className={`min-h-1/2 flex h-full items-start gap-[30px] mmd:flex-col`}>
        <div className={`h-full w-full md:basis-3/5 rounded-xl bg-[#27283C] p-10`}>
          <h3 className={`text-left text-xl font-medium text-[#c7c7c7]`}>{t('assignedRisk')}</h3>
          <p className={`flex h-full items-center justify-center`}>{t('noRisksAssigned')}</p>
        </div>
        <div className={`h-full md:basis-2/5 rounded-xl bg-[#27283C] p-10 mmd:w-full`}>
          <h3 className={`text-left text-xl font-medium text-[#c7c7c7]`}>{t('assignedActionItems')}</h3>
          <p className={`flex h-full items-center justify-center`}>{t('noActionItems')}</p>
        </div>
      </div>
    </section>
  )
}

export default DashboardSection

/* <div className="flex">
    <div className="card bg-gray-800 w-7/12 p-1 m-1 rounded-3xl">
        <div className=' text-gray-400 p-3 font-thin'>Products</div>
            <AmountChart/>
        </div>
        div className="card bg-gray-800 w-5/12 p-1 m-1 rounded-3xl">
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
        </div> */
