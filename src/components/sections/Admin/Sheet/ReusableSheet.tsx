import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@ui/AdminSheet'
import { useTranslations } from 'next-intl'
import Myform from '../../../ui/Myform'
import { translateUrl } from '../../../helper/helper'
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
        <div className="flex h-screen flex-col justify-between overflow-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <SheetHeader className="h-[40px]mmd:w-full">
            <SheetTitle>{t('title')}</SheetTitle>
          </SheetHeader>
          <div className="h-[calc(100vh-40px)] ">
            <Myform whatIs={whatIs} actionId={id} />
          </div>
          <SheetDescription></SheetDescription>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default ReusableSheet
