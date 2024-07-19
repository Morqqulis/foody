import React from 'react'
import { NextPage } from "next";
import DashboardSection from '@sections/Admin/Dashboard/dashboard';


const Dashboard: NextPage = (): JSX.Element => {
  return (
    <main className=" overflow-y-scroll flex gap-[28px] bg-[#1E1E30] p-[1px]">
      <section className='w-full'>
        <DashboardSection/>
      </section>
    </main>
  )
}

export default Dashboard