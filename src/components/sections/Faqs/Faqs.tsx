import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/accordion'
import { getTranslations } from 'next-intl/server'

const FaqsSection = async () => {
  const t = await getTranslations('FAQs')

  return (
    <div className={'container'}>
      <div className="card py-20">
        <h1 className="text-center text-5xl font-medium leading-8 text-[#000000]">{t('title')}</h1>
        <div className="m-auto mx-8 mt-10 p-6 text-base font-medium text-[#000000] shadow-lg lg:mx-32 lg:text-2xl">
          <Accordion type="single" collapsible>
            <AccordionItem value="faqFirst">
              <AccordionTrigger>{t('items.faqFirst.question')}</AccordionTrigger>
              <AccordionContent>
                <div
                  key="faqFirst"
                  aria-label={t('items.faqFirst.question')}
                  title={t('items.faqFirst.question')}
                  className="p-6 text-lg font-medium text-[#828282]"
                >
                  {t('items.faqFirst.answer')}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faqSecond">
              <AccordionTrigger>{t('items.faqSecond.question')}</AccordionTrigger>
              <AccordionContent>
                <div
                  key="faqSecond"
                  aria-label={t('items.faqSecond.question')}
                  title={t('items.faqSecond.question')}
                  className="p-6 text-lg font-medium text-[#828282]"
                >
                  {t('items.faqSecond.answer')}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faqThird">
              <AccordionTrigger>{t('items.faqThird.question')}</AccordionTrigger>
              <AccordionContent>
                <div
                  key="faqThird"
                  aria-label={t('items.faqThird.question')}
                  title={t('items.faqThird.question')}
                  className="p-6 text-lg font-medium text-[#828282]"
                >
                  {t('items.faqThird.answer')}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faqFourth">
              <AccordionTrigger>{t('items.faqFourth.question')}</AccordionTrigger>
              <AccordionContent>
                <div
                  key="faqFourth"
                  aria-label={t('items.faqFourth.question')}
                  title={t('items.faqFourth.question')}
                  className="p-6 text-lg font-medium text-[#828282]"
                >
                  {t('items.faqFourth.answer')}
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="faqFifth">
              <AccordionTrigger>{t('items.faqFifth.question')}</AccordionTrigger>
              <AccordionContent>
                <div
                  key="faqFifth"
                  aria-label={t('items.faqFifth.question')}
                  title={t('items.faqFifth.question')}
                  className="p-6 text-lg font-medium text-[#828282]"
                >
                  {t('items.faqFifth.answer')}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}

export default FaqsSection
