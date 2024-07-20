import { useTranslations } from "next-intl";
import AsideElement from "./AsideElement";
type IAsideElements = {
  id: number;
  icon: string;
  href: string;
  mt?: string;
};

const AsideElements: IAsideElements[] = [
  {
    id: 0,
    icon: "/AdminAside/dashboard.svg",
    href: "/admin",
  },
  {
    id: 1,
    icon: "/AdminAside/products.svg",
    href: "/admin/products",
  },
  {
    id: 2,
    icon: "/AdminAside/restaurants.svg",
    href: "/admin/restaurants",
  },
  {
    id: 3,
    icon: "/AdminAside/category.svg",
    href: "/admin/category",
  },
  {
    id: 4,
    icon: "/AdminAside/orders.svg",
    href: "/admin/orders",
  },
  {
    id: 5,
    icon: "/AdminAside/offer.svg",
    href: "/admin/offer",
  },
  {
    id: 6,
    icon: "/AdminAside/logout.svg",
    href: "/",
    mt: "mt-[20px] ",
  },
];

const AdminAside: React.FC = (): JSX.Element => {
  const t = useTranslations("Admin.Aside.title");

  return (
    <aside className="flex h-[474px] w-[256px] flex-col items-center rounded-[14px] bg-[#C74FEB] py-[24px]">
      {AsideElements.map((element) => (
        <AsideElement whatIs="admin" key={element.id} element={element} title={t(`${element.id}`)} />
      ))}
    </aside>
  );
};

export default AdminAside;