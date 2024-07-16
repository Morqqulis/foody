'use client'
import { IChildren } from '@settings/interfaces'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '@ui/button'
import {
   Form,
   FormControl,
   FormDescription,
   FormField,
   FormItem,
   FormLabel,
   FormMessage
} from '@ui/form'
import { SignInFormSchema, SignUpFormSchema } from '@settings/zodSchemes'
import LoginFormField from './LoginFormField'
interface ILoginForm {
   name: 'login' | 'register'
}

const LoginForm: React.FC<ILoginForm> = ({
   name = 'login'
}: ILoginForm): JSX.Element => {
   let schema = name === 'login' ? SignInFormSchema : SignUpFormSchema

   const defaultValues =
      name === 'login'
         ? { userName: '', password: '' }
         : {
              userName: '',
              fullName: '',
              email: '',
              password: ''
           }

   const t = useTranslations('Login')
   const form = useForm<z.infer<typeof schema>>({
      resolver: zodResolver(schema),
      defaultValues
   })

   const onSubmit = (values: z.infer<typeof schema>) => {

      console.log(values)
   }

   return (
      <Form {...form}>
         <form
            className={`flex flex-col gap-[25px] px-10`}
            onSubmit={form.handleSubmit(onSubmit)}
         >
            {name === 'register' && (
               <LoginFormField
                  form={form}
                  inputType={'text'}
                  name={'fullName'}
                  placeholder="John Doe"
               />
            )}

            <LoginFormField
               form={form}
               inputType={'text'}
               name={'userName'}
               placeholder="john_doe"
            />

            {name === 'register' && (
               <LoginFormField
                  form={form}
                  inputType={'email'}
                  name={'email'}
                  placeholder="wqS6S@example.com"
               />
            )}

            <LoginFormField
               form={form}
               inputType={'password'}
               name={'password'}
               placeholder="********"
            />

            <Button
               className={`bg-normal-red h-full py-3 text-xl font-medium text-white md:py-4`}
               type={'submit'}
               aria-label={t('form.btnSignIn')}
            >
               {name === 'login' ? t('form.btnSignIn') : t('form.btnSignUp')}
            </Button>
         </form>
      </Form>
   )
}

export default LoginForm
