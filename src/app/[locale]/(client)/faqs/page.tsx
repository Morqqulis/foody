import { NextPage } from 'next'
import React from 'react'
import FaqsSection from '@sections/Faqs/Faqs'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'FAQs.Metadata' })

  return {
    title: t('title'),
    description: t('description')
  }
}

const FaqsPage: NextPage = () => {
  return (
    <main>
      <FaqsSection />
    </main>
  )
}

export default FaqsPage
