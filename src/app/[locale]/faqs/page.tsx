import { NextPage } from 'next';

'use client';


import React, { useState } from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { NextUIProvider } from '@nextui-org/react';
import { motion } from 'framer-motion';
const Faqs: NextPage = () => {
  const t = useTranslations('FAQs');

  return (
    <NextUIProvider>
      <motion.div
        className="mt-20 card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-center text-[#000000] text-5xl font-medium leading-8">
          {t('title')}
        </h1>
        <div className="font-medium lg:mx-32 mx-8 shadow-lg mt-10 m-auto p-6 lg:text-2xl text-base">
          <Accordion>
            <AccordionItem
              key="faqFirst"
              aria-label={t('items.faqFirst.question')}
              title={t('items.faqFirst.question')}
              className="p-6 text-[#828282] text-lg font-medium"
            >
              {t('items.faqFirst.answer')}
            </AccordionItem>
            <AccordionItem
              key="faqSecond"
              aria-label={t('items.faqSecond.question')}
              title={t('items.faqSecond.question')}
              className="p-6 text-[#828282] text-lg font-medium"
            >
              {t('items.faqSecond.answer')}
            </AccordionItem>
            <AccordionItem
              key="faqThird"
              aria-label={t('items.faqThird.question')}
              title={t('items.faqThird.question')}
              className="p-6 text-[#828282] text-lg font-medium"
            >
              {t('items.faqThird.answer')}
            </AccordionItem>
            <AccordionItem
              key="faqFourth"
              aria-label={t('items.faqFourth.question')}
              title={t('items.faqFourth.question')}
              className="p-6 text-[#828282] text-lg font-medium"
            >
              {t('items.faqFourth.answer')}
            </AccordionItem>
            <AccordionItem
              key="faqFifth"
              aria-label={t('items.faqFifth.question')}
              title={t('items.faqFifth.question')}
              className="p-6 text-[#828282] text-lg font-medium"
            >
              {t('items.faqFifth.answer')}
            </AccordionItem>
          </Accordion>
        </div>
      </motion.div>
    </NextUIProvider>
  );
};

export default Faqs;
