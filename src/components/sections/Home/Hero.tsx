"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@ui/button';
import Title from '@ui/Title';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface IHero {}

const Hero: React.FC<IHero> = (): JSX.Element => {
  const t = useTranslations('Home.Hero');
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    if (heroRef.current && imageRef.current && textRefs.current.length) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1 }
      );
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: 100 },
        { opacity: 1, x: 0, duration: 1, delay: 0.5 }
      );
      textRefs.current.forEach((el, index) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, delay: 0.5 + index * 0.3 }
        );
      });
    }
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="container">
        <div className="flex flex-row-reverse items-center justify-between bg-gray-7 pb-[162px] pl-[57px]">
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
          {/* @ts-ignore */}
          <div className="relative z-[2]" ref={(el) => (textRefs.current[0] = el)}>
            <Title
              tag={'h1'}
              className="mlg:text-center text-2xl font-black text-mainBlack sm:text-4xl md:text-5xl lg:text-6xl"
              text={t('title')}
            />
              {/* @ts-ignore */}
            <p className="msm:hidden max-w-[510px] py-6 text-[22px] leading-[30px]" ref={(el) => (textRefs.current[1] = el)}>
              {t('text')}
            </p>
              {/* @ts-ignore */}
            <div className="flex gap-10" ref={(el) => (textRefs.current[2] = el)}>
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
  );
};

export default Hero;
