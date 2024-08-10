'use client'
import { usePathname } from '@settings/navigation'
import { Button } from '@ui/button'
import Title from '@ui/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

interface IDiscover {}

const Discover: React.FC = (): JSX.Element => {
  const path = usePathname()
  const t = useTranslations('Home.Discover')

  return (
    <section className={`translate-y-[90px] ${path === '/' ? 'block animate-fade-down' : 'hidden'}`}>
      <div className="container">
        <div className={`mx-auto flex max-w-[1060px] items-center justify-between rounded-[50px] bg-[#272727] px-11 py-[72px]`}>
          <Image className={`max-w-full`} src={'/Home/Discover/1.png'} alt={'Food image'} width={200} height={200} />
          <div className={`flex flex-col gap-11`}>
            <Title className={`text-balance text-center text-[50px] font-medium leading-[70px] text-white`} tag={'h3'} text={t('title')} />
            <Link
              className={`mx-auto w-fit rounded-[30px] bg-mainOrange px-11 py-2 text-xl font-medium text-white hover:bg-mainRed`}
              href={'/restaurants'}
            >
              {t('buttonText')}
            </Link>
          </div>
          <Image className={`max-w-full`} src={'/Home/Discover/2.png'} alt={'Food image'} width={200} height={200} />
        </div>
      </div>
    </section>
  )
}

export default Discover
