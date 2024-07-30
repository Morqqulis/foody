import { Plus } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ResusableSheet from '@sections/Admin/Sheet/ReusableSheet'

interface IHAOffers {}

const HAOffers: React.FC = (): JSX.Element => {
  const t = useTranslations('Admin.Offers')

  return (
    <ResusableSheet
      whatIs="AddOffer"
      trigger={
        <div
          className="flex items-center gap-4 rounded-3xl bg-[#C035A2] py-2 pl-4 border-2 text-base border-[#27283C] hover:border-[#C035A2] w-full pr-8 text-center uppercase text-white"
          style={{ boxShadow: '0px 4px 4px 0px rgba(39, 174, 96, 0.2)' }}
        >
          <Plus size={16} /> {t('addOffer')}
        </div>
      }
    />
  )
}

export default HAOffers
