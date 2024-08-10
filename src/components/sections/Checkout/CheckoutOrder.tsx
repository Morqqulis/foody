import LoadingAnimation from '@ui/LoadingAnimation'
import { useTranslations } from 'next-intl'
import React from 'react'

interface IProps {
  basket: any
  loading: boolean
}

const CheckoutOrder: React.FC<IProps> = ({ basket, loading }): JSX.Element => {
  const t = useTranslations('CheckoutOrder')

  function getTotal() {
    if (basket === null) return 0
    return basket.reduce((total: number, data: any) => total + Number(data.price) * Number(data.quantity), 0)
  }

  return (
    <div className={`flex h-[370px] w-full max-w-[400px] flex-col gap-6 bg-gray-7 px-10 py-5 pr-0`}>
      <h2 className={` pr-10 text-center text-lg font-medium`}>{t('yourOrder')}</h2>
      <div className={`flex h-full grow flex-col gap-2 overflow-auto pr-10`}>
        {loading ? (
          <LoadingAnimation width={100} height={100} />
        ) : (
          basket?.map((item: any) => (
            <div className={`flex items-start justify-between gap-4`} key={item.$id}>
              <div className={`flex items-center gap-2 text-sm font-normal`}>
                <span className={`text-lg font-medium`}>{item.quantity} x</span>
                <span className={`text-base font-normal capitalize`}>{item.name}</span>
              </div>
              <span>${item.price}</span>
            </div>
          ))
        )}
      </div>
      <div className={`flex items-center justify-between gap-2 pr-10`}>
        <span className={`font-medium`}>{t('total')}</span>
        <span className={``}>${getTotal().toFixed(2)}</span>
      </div>
    </div>
  )
}

export default CheckoutOrder
