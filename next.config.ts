import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // @ts-expect-error: appDir hali types-ga kiritilmagan
    appDir: true,
  },
};

export default nextConfig;
