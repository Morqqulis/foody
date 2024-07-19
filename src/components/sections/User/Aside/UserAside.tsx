import { useTranslations } from "next-intl";
import Aside from "../../Admin/Aside/AdminAsideElement";

type AsideElement = {
  id: number;
  icon: string;
  href: string;
};

const AsideElements: AsideElement[] = [
  {
    id: 0,
    icon: "/UserAside/profile.svg",
    href: "/user",
  },
  {
    id: 1,
    icon: "/UserAside/basket.svg",
    href: "/user/basket",
  },
  {
    id: 2,
    icon: "/UserAside/basket.svg",
    href: "/user/orders",
  },
  {
    id: 3,
    icon: "/UserAside/basket.svg",
    href: "/user/checkout",
  },
  {
    id: 4,
    icon: "/UserAside/basket.svg",
    href: "/",
  }
];
const UserAside: React.FC = (): JSX.Element => {
  const t = useTranslations("User.Aside.title");

  return <aside className="h-[515px] w-[325px] rounded-md bg-[#f3f4f6] pl-[35px] pr-[53px] pt-[45px]">
    {AsideElements.map((element) => (
      <Aside key={element.id} element={element} title={t(`${element.id}`)} whatIs="user" />
    ))} 
  </aside>;
};

export default UserAside;
