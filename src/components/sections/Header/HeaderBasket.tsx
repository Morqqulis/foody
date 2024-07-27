"use client";

import Link from "next/link";
import { IconBasket } from "../../icons/index";

interface IHeaderBasket {}

const HeaderBasket: React.FC = (): JSX.Element => {
  return (
    <Link className={``} href={"/user/basket"}>
      <IconBasket />
    </Link>
  );
};

export default HeaderBasket;
