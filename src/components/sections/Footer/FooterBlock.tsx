import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface IFooterBlock {
  blockName: string
  linksCount: number
}

const FooterBlock: React.FC<IFooterBlock> = ({ blockName, linksCount }: IFooterBlock): JSX.Element => {
  const t = useTranslations('Footer')

  return (
    <div className={`max-w-[150px]`}>
      <h6 className={` mb-2 text-lg font-black text-white`}>{t(`${blockName}.title`)}</h6>
      <ul className={`flex flex-col gap-1`}>
        {[...Array(linksCount)].map((_, index) => (
          <li key={index}>
            <Link className={`text-[13px] text-[#bdbdbd] hover:text-white`} href={'/'} aria-label={'link to'}>
              {t(`${blockName}.links.${index}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FooterBlock
