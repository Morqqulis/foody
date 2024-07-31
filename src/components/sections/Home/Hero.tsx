import { Button } from '@ui/button'
import Title from '@ui/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface IHero {}

const Hero: React.FC<IHero> = (): JSX.Element => {
  const t = useTranslations('Home.Hero')

  return (
    <section className="hero">
      <div className="container">
        <div className="flex flex-row-reverse items-center justify-between bg-gray-7 pb-[162px] pl-[57px]">
          <div className="relative flex w-full justify-end">
            <Image
              className="mb-[5px] block w-full max-w-[657px] lg:min-w-[500px]  "
              src="/Home/Hero/burger.png"
              alt="hero image"
              width={657}
              height={559}
              priority
              placeholder="blur"
              blurDataURL="/Home/Hero/burger.png"
            />
            <div
              className="absolute -left-[82px] bottom-[122px] flex w-full max-w-[278px] items-center gap-5 rounded-[15px] bg-white py-5 pl-5 pr-[59px] shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <Image src={'/Home/Hero/1.jpg'} alt={'food image'} width={70} height={50} />
              <span className="w-full max-w-[136px] text-center text-base font-medium tracking-[3%] text-gray-2">
                French Fries <br /> Yummy ...
              </span>
            </div>
            <div
              className="absolute right-[28px] top-[31px] flex w-full max-w-[278px] items-center gap-10 rounded-[15px] bg-white py-5 pl-5 pr-[59px] shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <Image src={'/Home/Hero/2.jpg'} alt={'food image'} width={70} height={50} />
              <span className="w-full max-w-[136px] text-center text-base font-medium tracking-[3%] text-gray-2">
                Pizza Hut <br /> Yummy ...
              </span>
            </div>
            <div
              className="absolute -bottom-[19px] right-[47px] flex w-full max-w-[278px] items-center gap-10 rounded-[15px] bg-white py-5 pl-5 pr-[59px] shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <Image src={'/Home/Hero/3.jpg'} alt={'food image'} width={70} height={50} />
              <span className="w-full max-w-[136px] text-center text-base font-medium tracking-[3%] text-gray-2">
                Cheesburger <br /> Yummy ...
              </span>
            </div>
          </div>
          <div className="relative z-[2]">
            <Title
              tag={'h1'}
              className="mlg:text-center text-2xl font-black text-mainBlack sm:text-4xl md:text-5xl lg:text-6xl"
              text={t('title')}
            />
            <p className="msm:hidden max-w-[510px] py-6 text-[22px] leading-[30px]">{t('text')}</p>
            <div className="flex gap-10">
              <Button
                className="rounded-[30px] border-[2px] bg-mainRed px-[45px] py-[34px] text-[25px] font-medium transition-colors duration-300 ease-in-out hover:bg-red-700 active:bg-red-800 focus:bg-red-700 focus:outline-none"
                type="button"
                aria-label="Get Started Button"
              >
                {t('firstBtn')}
              </Button>
              <Button
                className="rounded-[30px] border-[2px] border-foreground px-[45px] py-[34px] text-[25px] font-medium transition-colors duration-300 ease-in-out hover:bg-mainBlack hover:text-white active:bg-gray-900 focus:bg-mainBlack focus:text-white focus:outline-none"
                type="button"
                variant="ghost"
                aria-label="Order now Button"
              >
                {t('secondBtn')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
