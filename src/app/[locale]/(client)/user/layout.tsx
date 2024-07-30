import UserAside from '@sections/Aside/UserAside'

interface IUserLayout {
  children: React.ReactNode
  params: { locale: string }
}

const UserLayout: React.FC = ({ children, params: { locale } }: IUserLayout) => {
  return (
    <main>
      <div className={`container flex items-start gap-4 pt-4`}>
        <UserAside />
        {children}
      </div>
    </main>
  )
}

export default UserLayout
