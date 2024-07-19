import UserAside from "@sections/User/Aside/UserAside";

interface IUserLayout {
  children: React.ReactNode;
  params: { locale: string };
}

const UserLayout: React.FC = ({ children, params: { locale } }: IUserLayout) => {
  return (
    <div className={`wrapper`}>
      <div className="container pt-4">
        <div className={`flex items-start gap-4`}>
          <UserAside />
          {children}</div>
      </div>
    </div>
  );
};

export default UserLayout;
