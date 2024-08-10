'use client'
import Logo from '@ui/Logo'
import Socials from '@ui/Socials'
import { useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import FooterBlock from './FooterBlock'

interface IFooter {}

const Footer: React.FC<IFooter> = (): JSX.Element => {
  const path = usePathname()
  const t = useTranslations('Footer')

  return (
    <footer className={`bg-mainBlack pt-[130px] ${path === '/login' ? 'hidden' : 'block'} ${path.startsWith('/admin') && 'hidden'}`}>
      <div className="container">
        <div className={`mb-10 flex justify-center gap-5 text-center md:justify-between md:text-left`}>
          <div className={`max-w-[352px]`}>
            <Logo color={'white'} />
            <p className={`my-2.5 text-[22px] leading-[30px]`}>{t('text')}</p>
            <Socials />
          </div>
          <div className={`hidden w-full basis-[50%] justify-between gap-5 md:flex`}>
            {[
              { id: 1, blockName: 'popular', linksCount: 4 },
              { id: 2, blockName: 'cash', linksCount: 3 },
              { id: 3, blockName: 'help', linksCount: 3 }
            ].map(({ id, blockName, linksCount }) => (
              <FooterBlock key={id} blockName={blockName} linksCount={linksCount} />
            ))}
          </div>
        </div>
        <p className={`pb-5 text-center text-base text-white`}>{t('copyright')}</p>
      </div>
    </footer>
  )
}

export default Footer
