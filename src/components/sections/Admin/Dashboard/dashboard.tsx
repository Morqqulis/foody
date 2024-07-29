import React from "react"
import OrdersChart from "./OrdersChart"
import SalaryChart from "./SalaryChart"

const DashboardSection: React.FC = (): JSX.Element => {
  return (
    <section className="flex min-h-[calc(100vh-90px)] h-full flex-col gap-6">
      <div className={`flex  items-start justify-between gap-[30px] `}>
        <OrdersChart />
        <SalaryChart />
      </div>
      <div className={`flex h-full items-start gap-[30px]`}>
        <div className={`h-full max-h-[470px] basis-3/5 w-full rounded-xl bg-[#27283C] p-10`}>
          <h3 className={`text-left text-xl font-medium text-[#c7c7c7]`}>Assigned risk</h3>
          <p className={`flex h-full items-center justify-center`}>There are no risks assigned.</p>
        </div>
        <div className={`h-full max-h-[470px] basis-2/5 w-full rounded-xl bg-[#27283C] p-10`}>
          <h3 className={`text-left text-xl font-medium text-[#c7c7c7]`}>Assigned Action Items</h3>
          <p className={`flex h-full items-center justify-center`}>There are no risks assigned.</p>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;

{
  /* <div className="flex">
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
            </div> */
}
