import createNextIntlPlugin from "next-intl/plugin"
const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  webpack(config) {
    config.module.rules.push({
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
            pathname: "/**",
          },
        ],
      },
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
