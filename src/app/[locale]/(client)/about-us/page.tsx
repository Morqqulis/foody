import Title from '@ui/Title'
import { getTranslations } from 'next-intl/server'
import AboutUsPage from '@sections/About/AboutUsPage'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'AboutUs.Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

interface Ipage {}

const AboutPage: React.FC = (): JSX.Element => {
  return (
    <main>
      <div className="App">
        <AboutUsPage />
      </div>
    </main>
  )
}

export default AboutPage
