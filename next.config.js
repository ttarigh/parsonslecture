/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: '/parsonslecture/',
  basePath: '/parsonslecture',
}

module.exports = nextConfig
