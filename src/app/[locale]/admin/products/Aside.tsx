import { NextPage } from "next";
import AsideElement from "./AsideElement";
type AsideElement = {
  icon: string;
  title: string;
};

const AsideElements: AsideElement[] = [
  {
    icon: "/AdminAside/dashboard.svg",
    title: "Dashboard",
  },
  {
    icon: "/AdminAside/products.svg",
    title: "Products",
  },
  {
    icon: "/AdminAside/restaurants.svg",
    title: "Restaurants",
  },
  {
    icon: "/AdminAside/category.svg",
    title: "Category",
  },
  {
    icon: "/AdminAside/orders.svg",
    title: "Orders",
  },
  {
    icon: "/AdminAside/offer.svg",
    title: "Offer",
  },
];

const Aside: NextPage = (): JSX.Element => {
  return (
    <aside className="flex h-[474px] w-[256px] flex-col items-center rounded-[14px] bg-[#C74FEB] py-[24px]">
      {AsideElements.map((element) => (
        <AsideElement key={element.title} element={element} />
      ))}

      <AsideElement
        element={{
          icon: "/AdminAside/logout.svg",
          title: "Log Out",
          mt: "mt-[20px] ",
        }}
      />
    </aside>
  );
};

export default Aside;
