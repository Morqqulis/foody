import React from 'react'
import { NextPage } from "next";
import OrderChart from '../../../../components/Charts/OrderChart'
// import AmountChart from '../../../../components/Charts/AmountChart'
import AdminAside from '@sections/Admin/Aside/AdminAside'
import SectionHeader from '@sections/Admin/Headers/SectionHeader'
import ProductsSection from '@sections/Admin/Products/ProductsSection'
import DashboardSection from '@sections/Admin/Dashboard/dashboard';


const Dashboard: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30] p-[16px]">
      <AdminAside />
      <section>
        <DashboardSection/>
      </section>
    </main>
  )
}

export default Dashboard