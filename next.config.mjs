/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If your repository name is different from your GitHub username, uncomment and adjust these:
  // assetPrefix: '/your-repo-name/',
  // basePath: '/your-repo-name',
}

module.exports = nextConfig
