import Text from '@ui/Text';
import Title from '@ui/Title';
import { NextPage } from 'next';
import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'HowItWorks.Metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

const HowItWorksPage: NextPage = async (): Promise<JSX.Element> => {
  const t = await getTranslations('HowItWorks');

  return (
    <main>
      <section className="min-h-[calc(100vh-110px)] py-20">
        <div className="container">
          <Title
            className="mb-6 text-center text-[45px] font-semibold leading-[30px] tracking-[0.15px] text-black"
            tag={'h1'}
            text={t('title')}
          />
          <Text className="mx-auto mb-[50px] max-w-[1030px] text-center" text={t('text')} />
          <div className="relative flex w-full flex-col items-center justify-center">
            <div
              className="absolute left-1/2 z-[1] h-[407px] w-full max-w-[903px] -translate-x-[55%] rotate-[10deg] rounded-[100px] bg-[#FFB64F] shadow-[0px_3px_8px_-2px_rgba(0,0,0,0.2)]"
            ></div>
            <Image
              className="z-[2] max-w-full animate-wiggle"
              src={'/HowItWorks/delivery.png'}
              alt={'How it works'}
              width={628}
              height={683}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default HowItWorksPage;
