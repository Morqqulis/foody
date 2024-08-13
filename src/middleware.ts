import createMiddleware from 'next-intl/middleware'
import { localePrefix, locales } from '@settings/navigation'

export default createMiddleware({
  locales,
  localePrefix,
  defaultLocale: 'en'
})


export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)', '/(az|en|ru)/:path*']
}

// const intlMidlleware = createMiddleware({
//     locales,
//     localePrefix,
//     defaultLocale: "en",
//   });

//   export default async function middleware(req: NextRequest, res: NextResponse) {
//     if (req.nextUrl.pathname.startsWith("/user")) {
//       const session = await account.getSession("current");
//       if (!session) {
//         return NextResponse.redirect(new URL("/login", req.url));
//       } else {
//         return NextResponse.next();
//       }
//     }

//     return intlMidlleware(req);
//   }

//   // only applies this middleware to files in the app directory
//   export const config = {
//     matcher: ["/((?!api|_next|.*\\..*).*)", "/(az|en|ru)/:path*"],
//   };
