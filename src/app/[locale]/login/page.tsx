import LoginImage from '@sections/Login/LoginImage'
import LoginNavigation from '@sections/Login/LoginNavigation'

interface ILoginPage {}
const LoginPage = ({ params: { locale } }: { params: { locale: string } }) => {
   return (
      <main>
         <div className="container flex flex-col pt-4 lg:grid lg:grid-cols-2 lg:pt-10">
            <LoginImage />

            <div className={`min-h-[901px]`}>
               <LoginNavigation />
            </div>
         </div>
      </main>
   )
}

export default LoginPage
