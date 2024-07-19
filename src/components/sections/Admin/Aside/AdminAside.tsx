import { useTranslations } from "next-intl";
import AsideElement from "./AdminAsideElement";
import { title } from "process";
type AsideElement = {
  id: number;
  icon: string;
  href: string;
};

const AsideElements: AsideElement[] = [
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
];

const AdminAside: React.FC = (): JSX.Element => {
  const t = useTranslations("Admin.Aside.title");

  return (
    <aside className="flex h-[474px] w-[256px] flex-col items-center rounded-[14px] bg-[#C74FEB] py-[24px]">
      {AsideElements.map((element) => (
        <AsideElement whatIs="admin" key={element.id} element={element} title={t(`${element.id}`)} />
      ))}

      <AsideElement
        element={{
          icon: "/AdminAside/logout.svg",
          mt: "mt-[20px] ",
          href: "/",
        }}
        title={t(`${AsideElements.length}`)}
        whatIs="admin"
      />
    </aside>
  );
};

export default AdminAside;
