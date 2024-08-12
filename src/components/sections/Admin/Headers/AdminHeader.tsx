'use client'
import HeaderLanguages from '@sections/Header/HeaderLangs'
import Logo from '@ui/Logo'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import AddProductSheet from '../Sheet/ReusableSheet'
import { usePathname, useRouter } from 'next/navigation'
import BurgerMenu from './BurgerMenu'
import { useEffect } from 'react'

interface IAdminHeader {}

const AdminHeader: React.FC = (): JSX.Element => {
  const pasthname = usePathname()
  const t = useTranslations('Admin.Header')
  const router = useRouter()

  useEffect(() => {
  const adminLog = localStorage.getItem('admin')
  if (adminLog != 'true') router.push('/admin/login')
  }, [])

  return (
    <header className={`mb-[18px] rounded-b-[20px] bg-[#27283C] p-3`}>
      <nav className={`flex items-center justify-between gap-5`}>
        <div className="flex gap-4">
          <BurgerMenu />
          <Logo className={`hover:scale-105`} color={'white'} />
        </div>
        <div className={`flex items-center gap-4 ${pasthname.startsWith('/admin/login') ? 'hidden' : 'block'}`}>
          <AddProductSheet
            trigger={
              <div
                className={`flex items-center gap-2 rounded-[18px] border-[2px] border-[#C035A2] bg-[#C035A2] px-4 text-[10px] font-bold uppercase leading-[21px] text-white shadow-[0px_4px_4px_0px_rgb(39_174_96)/25%]`}
              >
                <span className={`text-lg font-normal`}>+</span> <p className="mmd:hidden">{t('btn')}</p>
              </div>
            }
            whatIs="AddProduct"
          />

          <HeaderLanguages />
          <div className={`flex items-center gap-2 text-white`}>
            <Image src="/Admin/Header/admin.svg" alt={'admin icon'} width={40} height={40} priority />
            <span className="mmd:hidden">{t('admin')}</span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default AdminHeader
