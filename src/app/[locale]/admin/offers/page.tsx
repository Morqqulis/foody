import { NextPage } from 'next'
import OffersSection from '@sections/Admin/Offers/OffersSection'

interface IOrdersPage {}

const OffersPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex gap-[28px] bg-[#1E1E30]">
      <OffersSection />
    </main>
  )
}

export default OffersPage
