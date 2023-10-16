/** @type {import('next').NextConfig} */
const nextConfig = {
    postcssLoaderOptions: {
        postcssOptions: {
          config: './postcss.config.js',
        },
    },
}

module.exports = nextConfig
