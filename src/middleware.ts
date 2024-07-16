import createMiddleware from "next-intl/middleware";
import { localePrefix, locales } from "@settings/navigation";

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: "en",
});

// only applies this middleware to files in the app directory
export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/(az|en|ru)/:path*"],
};
