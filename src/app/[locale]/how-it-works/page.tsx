import { mukta } from '@settings/fonts'
import Text from '@ui/Text'
import Title from '@ui/Title'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface Ipage {}

const HowItWorksPage: NextPage = (): JSX.Element => {
   const t = useTranslations('HowItWorks')

   return (
      <main>
         <section className={`py-20`}>
            <div className="container">
               <Title
                  className={`text-center text-black font-semibold text-[45px] leading-[30px] tracking-[0.15px] mb-6 ${mukta.className}`}
                  tag={'h1'}
                  text={t('title')}
               />
               <Text
                  className={`max-w-[1030px] text-center mx-auto mb-[50px]`}
                  text={t('text')}
               />
               <div
                  className={`relative flex w-full flex-col items-center justify-center`}
               >
                  <div
                     className={`absolute left-1/2 z-[1] rotate-[10deg] -translate-x-[55%] h-[407px] w-full max-w-[903px] rounded-[100px] bg-[#FFB64F] shadow-[0px_3px_8px_-2px_rgba(0_0_0_0.2)]`}
                  ></div>
                  <Image
                     className={`z-[2] max-w-full`}
                     src={'/HowItWorks/delivery.png'}
                     alt={'How it works'}
                     width={628}
                     height={683}
                  />
               </div>
            </div>
         </section>
      </main>
   )
}

export default HowItWorksPage
