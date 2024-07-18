import { useTranslations } from "next-intl";
import AsideElement from "./AdminAsideElement";
import { title } from "process";
type AsideElement = {
  id: number;
  icon: string;
};

const AsideElements: AsideElement[] = [
  {
    id: 0,
    icon: "/AdminAside/dashboard.svg",
  },
  {
    id: 1,
    icon: "/AdminAside/products.svg",
  },
  {
    id: 2,
    icon: "/AdminAside/restaurants.svg",
  },
  {
    id: 3,
    icon: "/AdminAside/category.svg",
  },
  {
    id: 4,
    icon: "/AdminAside/orders.svg",
  },
  {
    id: 5,
    icon: "/AdminAside/offer.svg",
  },
];

const AdminAside: React.FC = (): JSX.Element => {
  const t = useTranslations("Admin.Aside.title");

  return (
    <aside className="flex h-[474px] w-[256px] flex-col items-center rounded-[14px] bg-[#C74FEB] py-[24px]">
      {AsideElements.map((element) => (
        <AsideElement key={element.id} element={element} title={t(`${element.id}`)} />
      ))}

      <AsideElement
        element={{
          icon: "/AdminAside/logout.svg",
          mt: "mt-[20px] ",
        }}
        title={t(`${AsideElements.length}`)}
      />
    </aside>
  );
};

export default AdminAside;
