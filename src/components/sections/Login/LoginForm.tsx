'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { SignInFormSchema, SignUpFormSchema } from '@settings/zodSchemes'
import { Button } from '@ui/button'
import { Form } from '@ui/form'
import LoadingAnimation from '@ui/LoadingAnimation'
import { useToast } from '@ui/use-toast'
import axios from 'axios'
import { useTranslations } from 'next-intl'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import LoginFormField from './LoginFormField'

interface ILoginForm {
  name: 'login' | 'register'
}

const LoginForm: React.FC<ILoginForm> = ({ name = 'login' }: ILoginForm): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false)
  const setSchema = (name: 'login' | 'register') => (name === 'login' ? SignInFormSchema : SignUpFormSchema)
  const schema = setSchema(name)
  const router = useRouter()
  const { toast } = useToast()

  const setDefaultValues = () => (name === 'login' ? { email: '', password: '' } : { fullName: '', userName: '', email: '', password: '' })

  const t = useTranslations('Login')

  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: setDefaultValues()
  })

  const handleLogin = async (data: z.infer<typeof SignInFormSchema>) => {
    setIsLoading(true)
    const res = await axios.post('api/login', data)

    if (!res.data.$id) {
      toast({ title: 'Sign In Failed', description: `We can not find this user`, variant: 'destructive', duration: 2000 })
    } else {
      localStorage.setItem('userId', res.data.$id)
      toast({
        title: 'Congratulations',
        description: `Sign In Succesfull`,
        variant: 'dark',
        duration: 2000
      })

      window.dispatchEvent(new Event('storage'))
      
      form.reset()
      router.push('/user')
    }

    setIsLoading(false)
  }

  const handleResigter = async (data: z.infer<typeof SignUpFormSchema>) => {
    setIsLoading(true)

    const res = await axios.post('api/register', data)

    if (!res.data.isExist) {
      toast({
        title: 'Congratulations',
        description: `Sign Up Succesfull`,
        variant: 'dark',
        duration: 2000
      })
      form.reset()
    } else {
      toast({
        title: 'Sign Up Failed',
        description: `This user alredy exist`,
        variant: 'destructive',
        duration: 2000
      })
    }
    setIsLoading(false)
  }

  const onSubmit = async (values: z.infer<typeof schema>) => {
    switch (name) {
      case 'login':
        handleLogin(values)
        break
      case 'register':
        handleResigter(values)
        break
      default:
        ;() => toast({ title: 'Enter Valid data', description: 'You have some Error', variant: 'destructive', duration: 2000 })
        form.reset()
        break
    }
  }

  return (
    <div className="relative flex min-h-96 flex-col items-center justify-center">
      {isLoading ? (
        <LoadingAnimation className="absolute left-0 top-0 " height={300} width={300} />
      ) : (
        <Form {...form}>
          <form className={`flex w-full flex-col gap-[25px] px-10`} onSubmit={form.handleSubmit((data) => onSubmit(data))}>
            {name === 'register' && (
              <>
                <LoginFormField form={form} inputType={'text'} name={'fullName'} placeholder="John Doe" />
                <LoginFormField form={form} inputType={'text'} name={'userName'} placeholder="john_doe" />
              </>
            )}
            <LoginFormField form={form} inputType={'text'} name={'email'} placeholder="wqS6S@example.com" />
            <LoginFormField form={form} inputType={'password'} name={'password'} placeholder="********" />

            <Button className={`h-full bg-normal-red py-3 text-xl font-medium text-white md:py-4`} type={'submit'} aria-label={t('form.btnSignIn')}>
              {name === 'login' ? t('form.btnSignIn') : t('form.btnSignUp')}
            </Button>
          </form>
        </Form>
      )}
    </div>
  )
}

export default LoginForm
