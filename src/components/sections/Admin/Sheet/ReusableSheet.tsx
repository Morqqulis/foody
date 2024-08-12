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
      <SheetContent className={`p-10`}>
        <div className="overflow-y-clip" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <SheetHeader className=" mb-5 mmd:w-full">
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
