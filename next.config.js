/** @type {import('next').NextConfig} */
// 追加した `headers.js` を読み込む
const headers =
  process?.env?.NODE_ENV !== 'development'
    ? require('./headers')
    : [
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ]

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  async headers() {
    return [
      {
        // 全てのパスに Security Headers を適用する
        source: '/(.*)',
        headers,
      },
    ]
  },
}

module.exports = { images: { domains: ['images.prismic.io'] }, ...nextConfig }
