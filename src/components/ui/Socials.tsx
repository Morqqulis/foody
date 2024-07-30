import Link from 'next/link'
import { IconFacebook, IconInsta, IconTwitter } from '../icons'

interface ISocialsData {
  id: number
  icon: JSX.Element
  link: string
}

const socialsData: ISocialsData[] = [
  {
    id: 1,
    icon: <IconFacebook />,
    link: '/'
  },
  {
    id: 2,
    icon: <IconInsta />,
    link: '/'
  },
  {
    id: 3,
    icon: <IconTwitter />,
    link: '/'
  }
]

const Socials: React.FC = (): JSX.Element => {
  return (
    <ul className={`flex items-center justify-center gap-[18px] md:justify-normal`}>
      {socialsData.map(({ id, icon, link }: ISocialsData) => (
        <li key={id}>
          <Link
            className={`group/social flex h-[50px] w-[50px] items-center justify-center rounded-full border-[1px] border-white bg-transparent hover:bg-mainOrange`}
            href={link}
          >
            {icon}
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Socials
