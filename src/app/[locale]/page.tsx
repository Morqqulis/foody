import Discover from '@sections/Home/Discover'
import Features from '@sections/Home/Features'
import Food from '@sections/Home/Food'
import Hero from '@sections/Home/Hero'
import Popular from '@sections/Home/Popular'
import { NextPage } from 'next'
import { getTranslations } from 'next-intl/server'
//----------------------------------------------

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Home.Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

//----------------------------------------------

const Home: NextPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <Food />
      <Popular />
      <Discover />
    </main>
  )
}

export default Home
