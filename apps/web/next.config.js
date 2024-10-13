const { withExpo } = require('@expo/next-adapter');

/** @type {import('next').NextConfig} */
const nextConfig = withExpo({
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    "react-native",
    "react-native-web",
    "ui",
    "nativewind",
    "react-native-css-interop",
  ],
  experimental: {
    forceSwcTransforms: true,
  },
});

module.exports = nextConfig;

//Note: Expo Next.js adapter does not support the experimental app directory.