import { PlusIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import ReusableSheet from '@sections/Admin/Sheet/ReusableSheet'

const HACategory: React.FC = (): JSX.Element => {
  const t = useTranslations('Admin.Category')

  return (
    <div className="flex items-center ">
      <ReusableSheet
        trigger={
          <div className="flex cursor-pointer items-center gap-2 rounded-md  bg-[#C035A2] p-2 text-white mmd:w-full">
            <PlusIcon size={20} className="" />
            {t('addCategory')}
          </div>
        }
        whatIs="AddCategory"
      />
    </div>
  )
}

export default HACategory
