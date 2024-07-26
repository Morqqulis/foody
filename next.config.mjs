import createNextIntlPlugin from "next-intl/plugin"
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,

  images: {
    remotePatterns: [
      {
        protocol: "https" || "http",
        hostname: "**",
        pathname: "/**",
      },
    ],
  },

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,

      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

export default withNextIntl(nextConfig);
