module.exports = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  //  Server が決まってる場合は設定できるがサンプルアプリなので未設定
  // {
  //     key: 'Server',
  //     value: 'Apache', // phony server value
  // },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'sameorigin',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'same-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=*',
  },
  //  Content Security Policyの設定内容は要検討
  //   {
  //     key: 'Content-Security-Policy',
  //     value: `default-src 'self';script-src *;img-src *;style-src 'self';font-src 'self';`,
  //   },
]
