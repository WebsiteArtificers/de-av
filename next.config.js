/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
          test: /\.css$/,
          use: [
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  config: './postcss.config.js',
                },
              },
            },
          ],
        });
    
        return config;
    },
}

module.exports = nextConfig
