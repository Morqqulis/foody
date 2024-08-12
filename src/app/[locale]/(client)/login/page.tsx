import LoginImage from '@sections/Login/LoginImage'
import LoginNavigation from '@sections/Login/LoginNavigation'
import { Toaster } from '@ui/toaster'
import { getTranslations } from 'next-intl/server'
//----------------------------------------------

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'Login.Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}
//----------------------------------------------

const LoginPage = () => {
  return (
    <main>
      <section className="container flex flex-col pt-4 lg:grid lg:grid-cols-2 lg:pt-10">
        <LoginImage />

        <div className={`min-h-[901px]`}>
          <LoginNavigation />
        </div>
      </section>
    </main>
  )
}

export default LoginPage
