"use client";

import { Link, usePathname } from "@settings/navigation";
import Logo from "@ui/Logo";
import { useTranslations } from "next-intl";
import HeaderMenu from "./HeaderMenu";
import HeaderInput from "./HeaderInput";
import HeaderLanguages from "./HeaderLangs";

interface IHeader {
  className?: string;
}

const Header: React.FC<IHeader> = ({ className }: IHeader): JSX.Element => {
  const path = usePathname();
  const t = useTranslations("Header");

  return (
    <header className={`${className || ""} `}>
      <div className={`container `}>
        <div
          className={`flex  rounded py-9  pt-7 ${path === "/login" ? "bg-normal-red px-[40px]" : path.startsWith("/admin") ? "hidden" : "bg-gray-7 pl-[57px]"}`}
        >
          <nav className={`flex w-full items-center ${path === "/login" && "justify-between"}`}>
            <Logo className={"mr-8"} color={path === "/login" ? "white" : "black"} />
            <HeaderMenu className={`mr-10 ${path == "/login" && "hidden"}`} />
            <HeaderInput className={`mr-8 ${path == "/login" && "hidden"}`} />

            {path === "/login" && <HeaderLanguages />}
            <div className={`flex w-full items-center gap-5 ${path == "/login" && "hidden"}`}>
              <HeaderLanguages />

              <Link
                className={`flex w-full max-w-[115px] items-center justify-center rounded-full bg-mainRed px-5 py-2 text-center text-sm font-medium tracking-widest text-white`}
                href={"/login"}
              >
                {t("signUp")}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
