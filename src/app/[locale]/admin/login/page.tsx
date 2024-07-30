import { NextPage } from 'next'
import AdminLogin from '../../../../components/sections/Admin/Login/AdminLogin'

const SignInPage: NextPage = (): JSX.Element => {
  return (
    <main className="flex h-screen w-full items-center justify-center">
      <AdminLogin />
    </main>
  )
}

export default SignInPage
