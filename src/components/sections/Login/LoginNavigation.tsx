'use client'
import { cn } from '@libs/clsx'
import { useLoginStore } from '@stores/Login'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@ui/tabs'
import { Toaster } from '@ui/toaster'
import { useTranslations } from 'next-intl'
import LoginForm from './LoginForm'

interface ILoginNavigation {}

const LoginNavigation: React.FC = (): JSX.Element => {
  const t = useTranslations('Login')
  const { defaultTab, setDefaultTab } = useLoginStore()

  return (
    <>
      <Tabs defaultValue={defaultTab} className={`pt-[40px] lg:pt-[87px]`}>
        <TabsList className={`mb-[72px] flex justify-center gap-16 bg-transparent`}>
          <TabsTrigger
            className={cn(`text-2xl duration-300 hover:text-mainOrange data-[state=active]:text-normal-red lg:text-3xl`)}
            value={'login'}
            onClick={() => setDefaultTab('login')}
          >
            {t('signIn')}
          </TabsTrigger>
          <TabsTrigger
            className={cn(`text-2xl duration-300 hover:text-mainOrange data-[state=active]:text-normal-red lg:text-3xl`)}
            value="register"
            onClick={() => setDefaultTab('register')}
          >
            {t('signUp')}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm name="login" />
        </TabsContent>
        <TabsContent value="register">
          <LoginForm name="register" />
        </TabsContent>
      </Tabs>
    </>
  )
}

export default LoginNavigation
