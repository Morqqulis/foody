'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { collections, databases, dbId, ID } from '@libs/appwrite/config'
import DoneIconComponent from './LottieAnimation'
import { Button } from '@ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@ui/form'
import { Input } from '@ui/input'
import { RadioGroup, RadioGroupItem } from '@ui/radio-group'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { getDocuments } from '../../../utls/functions'
import CheckoutOrder from './CheckoutOrder'
import { useTranslations } from 'next-intl'

const formSchema = z.object({
  address: z
    .string({
      required_error: 'Delivery address is required.'
    })
    .min(2, {
      message: 'Address must be at least 2 characters.'
    }),
  phone: z
    .string({
      required_error: 'Contact number is required.',
      invalid_type_error: 'Contact number must be a number.'
    })
    .min(2, {
      message: 'Phone number must be at least 11 characters.'
    }),
  payment: z.enum(['Cash', 'Card'], {
    required_error: 'Payment method is required.'
  })
})

function CheckoutHome() {
  const t = useTranslations('Checkout')
  const [showDoneIcon, setShowDoneIcon] = useState(false)
  const [userId, setUserId] = useState('')
  const [basket, setBasket] = useState([])
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  const totalAmount = basket?.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: '',
      phone: '',
      payment: 'Cash'
    }
  })

  useEffect(() => {
    const token = localStorage.getItem('userId')
    if (token != '') setUserId(token)

    const handleStorageChange = () => {
      const updatedToken = localStorage.getItem('userId')
      setUserId(updatedToken)
    }

    if (!userId) return
    ;(async () => {
      const userInfo = await getDocuments(collections.userId, userId)
      setUser(userInfo)

      const basketIdinUser = userInfo.basket && userInfo.basket.$id
      if (basketIdinUser) {
        let prevBasket = userInfo.basket.productsList
        setBasket(JSON.parse(prevBasket))
      }
    })()
    setLoading(false)

    window.addEventListener('storage', handleStorageChange)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
    }
  }, [userId])

  const handleCheckOut = async (v: z.infer<typeof formSchema>) => {
    const orderInfo = JSON.stringify({
      time: new Date().toLocaleDateString(),
      address: v.address,
      amount: totalAmount,
      payment: v.payment,
      phone: v.phone,
      basket
    })

    if (!userId) return
    // @ts-ignore
    const basketId = await user.basket.$id
    await databases.createDocument(dbId, collections.ordersId, ID.unique(), {
      user: userId,
      orderInfo
    })

    await databases.updateDocument(dbId, collections.basketId, basketId, { productsList: null })

    setShowDoneIcon(true)
    form.reset()
    setBasket([])
  }

  useEffect(() => {
    let timer: any
    if (showDoneIcon) {
      timer = setTimeout(() => {
        setShowDoneIcon(false)
      }, 3000)
    }
    return () => clearTimeout(timer)
  }, [showDoneIcon])

  return showDoneIcon ? (
    <DoneIconComponent />
  ) : (
    <section className={`w-full`}>
      <div className={`flex items-start gap-4`}>
        <div className={`w-full basis-2/3 rounded-md bg-gray-7 p-10 pb-11`}>
          <h1 className={`mb-6 text-3xl font-semibold text-gray-2 `}>{t('checkoutTitle')}</h1>
          <Form {...form}>
            <form className={`flex flex-col gap-8`} onSubmit={form.handleSubmit(handleCheckOut)}>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem className={`flex flex-col gap-1`}>
                    <FormLabel className={`text-lg font-semibold text-gray-2`}>{t('addressLabel')}</FormLabel>
                    <FormControl>
                      <Input
                        className={`p-6 text-lg placeholder:text-foreground placeholder:duration-300 focus-visible:placeholder:opacity-0`}
                        placeholder={t('addressPlaceholder')}
                        {...field}
                        type={'text'}
                        autoComplete={'address-level1 webauthn'}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className={`flex flex-col gap-1`}>
                    <FormLabel className={`text-lg font-semibold text-gray-2`}>{t('phoneLabel')}</FormLabel>
                    <FormControl>
                      <Input
                        className={`p-6 text-lg placeholder:text-foreground placeholder:duration-300 focus-visible:placeholder:opacity-0`}
                        placeholder={t('phonePlaceholder')}
                        {...field}
                        type={'tel'}
                        autoComplete={'tel webauthn'}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="payment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <RadioGroup className={`flex items-center gap-20`} onValueChange={field.onChange} defaultValue={field.value}>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className={` h-[30px] w-[30px]  first:fill-[#6FCF97] ${field.value === 'Card' ? 'border-[#6FCF97] text-[#6FCF97]' : 'border-foreground text-foreground'}`}
                              value="Card"
                            />
                          </FormControl>
                          <FormLabel
                            className={`${field.value === 'Card' ? 'font-bold text-[#6FCF97]' : 'text-foreground'} cursor-pointer text-base`}
                          >
                            {t('paymentCard')}
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              className={`h-[30px] w-[30px] first:fill-[#6FCF97] ${field.value === 'Cash' ? '!border-[#6FCF97] text-[#6FCF97]' : 'border-foreground text-foreground'}`}
                              value="Cash"
                            />
                          </FormControl>
                          <FormLabel
                            className={`${field.value === 'Cash' ? 'font-bold text-[#6FCF97]' : 'border-slate-600'} text-base} cursor-pointer`}
                          >
                            {t('paymentCash')}
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className={`bg-[#6FCF97] py-7 duration-300 hover:bg-mainRed`} type="submit">
                {t('submitButton')}
              </Button>
            </form>
          </Form>
        </div>
        <CheckoutOrder basket={basket} loading={loading} />
      </div>
    </section>
  )
}

export default CheckoutHome
