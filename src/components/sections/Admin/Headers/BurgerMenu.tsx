import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from './BurgerSheet'
import { AlignJustify, ChevronLeft } from 'lucide-react'
import AdminAside from '@sections/Aside/AdminAside'

const BurgerMenu: React.FC = (): JSX.Element => {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <AlignJustify className="cursor-pointer text-white" />
      </SheetTrigger>
      <SheetContent side={'left'} className="w-[80%] overflow-auto border-none bg-[#C74FEB]">
        <SheetHeader>
          <SheetClose>
            <SheetTitle className="flex items-center">
              <ChevronLeft className="text-white" size={50} />
              <div className={`text-[2.25rem] font-extrabold leading-6 text-white`}>
                Foody
                <span className="text-[#EAAB00]">.</span>
              </div>
            </SheetTitle>
          </SheetClose>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <AdminAside className="md:hidden" />
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default BurgerMenu
