import Title from '@ui/Title'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations({ locale, namespace: "AboutUs.Metadata" });
  
    return {
      title: t("title"),
      description: t("description"),
    };
  }

interface Ipage {}

const AboutPage: React.FC = (): JSX.Element => {
   return (
      <main>
         <section>
            <Title
               tag={'h1'}
               text={'About Page'}
            />
         </section>
      </main>
   )
}

export default AboutPage
