'use client'

import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Button } from '@ui/button'
import Title from '@ui/Title'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

interface IHero {}

const Hero: React.FC<IHero> = (): JSX.Element => {
  const t = useTranslations('Home.Hero')
  const heroRef = useRef(null)
  const imageRef = useRef(null)
  const textRefs = useRef([])
  const [userId, setUserId] = useState('')

  useEffect(() => {
    const token = localStorage.getItem('userId')
    setUserId(token || '')

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('userId')
      setUserId(updatedToken || '')
    }

    if (heroRef.current && imageRef.current && textRefs.current.length) {
      gsap.fromTo(heroRef.current, { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1 })
      gsap.fromTo(imageRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 0.5 })
      textRefs.current.forEach((el, index) => {
        gsap.fromTo(el, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, delay: 0.5 + index * 0.3 })
      })
    }

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="flex flex-row-reverse items-center justify-between rounded-b bg-gray-7 pb-[162px] pl-[57px] pt-10 ">
          <div className="relative flex w-full justify-end">
            <Image
              ref={imageRef}
              className="mb-[5px] block w-full max-w-[657px] lg:min-w-[500px]"
              src="/Home/Hero/burger.png"
              alt="hero image"
              width={657}
              height={559}
              priority
              placeholder="blur"
              blurDataURL="/Home/Hero/burger.png"
            />
            <div className="absolute -left-[82px] bottom-[122px] flex w-full max-w-[278px] items-center gap-5 rounded-[15px] bg-white py-5 pl-5 pr-[59px] shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
              <Image src={'/Home/Hero/1.jpg'} alt={'food image'} width={70} height={50} />
              <span className="w-full max-w-[136px] text-center text-base font-medium tracking-[3%] text-gray-2">
                French Fries <br /> Yummy ...
              </span>
            </div>
            <div className="absolute right-[28px] top-[31px] flex w-full max-w-[278px] items-center gap-10 rounded-[15px] bg-white py-5 pl-5 pr-[59px] shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
              <Image src={'/Home/Hero/2.jpg'} alt={'food image'} width={70} height={50} />
              <span className="w-full max-w-[136px] text-center text-base font-medium tracking-[3%] text-gray-2">
                Pizza Hut <br /> Yummy ...
              </span>
            </div>
            <div className="absolute -bottom-[19px] right-[47px] flex w-full max-w-[278px] items-center gap-10 rounded-[15px] bg-white py-5 pl-5 pr-[59px] shadow-lg transition-transform duration-500 ease-in-out hover:scale-105">
              <Image src={'/Home/Hero/3.jpg'} alt={'food image'} width={70} height={50} />
              <span className="w-full max-w-[136px] text-center text-base font-medium tracking-[3%] text-gray-2">
                Cheesburger <br /> Yummy ...
              </span>
            </div>
          </div>
          {/* @ts-ignore */}
          <div className="relative z-[2]" ref={(el) => (textRefs.current[0] = el)}>
            <Title
              tag={'h1'}
              className="mb-4 text-2xl font-black text-mainBlack sm:text-4xl md:text-5xl lg:text-6xl mlg:text-center"
              text={t('title')}
            />
            {/* @ts-ignore */}
            <p className="mb-10 max-w-[600px] text-[22px] leading-[30px] msm:hidden" ref={(el) => (textRefs.current[1] = el)}>
              {t('text')}
            </p>
            {/* @ts-ignore */}
            <div className="flex gap-10" ref={(el) => (textRefs.current[2] = el)}>
              <Link
                className="rounded-[30px] border-[2px] bg-mainRed px-[45px] py-[14px] text-[25px] font-medium text-white transition-colors duration-300 ease-in-out hover:bg-red-700 focus:bg-red-700 focus:outline-none active:bg-red-800"
                href={`${userId ? '/restaurants' : '/login'}`}
                aria-label="Get Started Button"
              >
                {t('firstBtn')}
              </Link>
              <Link
                className="rounded-[30px] border-[2px] border-foreground px-[45px] py-[14px] text-[25px] font-medium transition-colors duration-300 ease-in-out hover:bg-mainBlack hover:text-white focus:bg-mainBlack focus:text-white focus:outline-none active:bg-gray-900"
                type="button"
                href={`${'/restaurants'}`}
                aria-label="Order now Button"
              >
                {t('secondBtn')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
