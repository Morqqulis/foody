import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@ui/AdminSheet'
import { useTranslations } from 'next-intl'
import { translateUrl } from '../../../helper/helper'
import Myform from '../../../ui/Myform'
interface IReusableSheet {
  trigger: any
  whatIs: string
  id?: any
  restore?: any
}

const ReusableSheet: React.FC<IReusableSheet> = ({ trigger, whatIs, id, restore }): JSX.Element => {
  const t = useTranslations(`Admin.${translateUrl(whatIs)}.Sheet.imageBlock`)

  return (
    <Sheet>
      <SheetTrigger className={`cursor-pointer duration-300 ${whatIs.startsWith('Add') && 'hover:bg-slate-900'}`} asChild>
        {trigger}
      </SheetTrigger>
      <SheetContent>
        <div className="overflow-y-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <SheetHeader className=" mmd:w-full mb-5">
            <SheetTitle>{t('title')}</SheetTitle>
          </SheetHeader>
          <div className="">
            <Myform whatIs={whatIs} actionId={id} />
          </div>
          <SheetDescription></SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ReusableSheet
