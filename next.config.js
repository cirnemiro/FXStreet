/** @type {import('next').NextConfig} */
const nextConfig = {
    // image: {
    //     domains: ['https:/editorial.fxstreet.com'],
    // },
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'editorial.fxstreet.com',
            port: '',
            pathname: '**',
          },
        ],
      },

}

module.exports = nextConfig
