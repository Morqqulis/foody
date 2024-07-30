'use client'

import { useLoginStore } from '@stores/Login'
import Image from 'next/image'

interface ILoginImage {
  className?: string
}

const LoginImage: React.FC<ILoginImage> = ({ className }: ILoginImage): JSX.Element => {
  const { defaultTab } = useLoginStore()
  return (
    <div className={`flex basis-1/3  flex-col items-center justify-center overflow-hidden bg-normal-red lg:h-full ${className}`}>
      <Image
        className={`${defaultTab === 'login' ? 'lg:max-w-[575px]' : 'lg:max-w-[515px]'}`}
        src={`${defaultTab === 'login' ? '/Login/login.png' : '/Login/signup.png'}`}
        alt={'login image'}
        width={defaultTab === 'login' ? 575 : 515}
        height={defaultTab === 'login' ? 736 : 621}
        priority
      />
    </div>
  )
}

export default LoginImage
