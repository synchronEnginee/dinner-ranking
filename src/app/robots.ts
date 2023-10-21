import { MetadataRoute } from 'next'
/**
 * robots.txtを生成したい場合
 * @returns
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // 全て拒否
      //   disallow: '/',
    },
    // sitemap: 'https://acme.com/sitemap.xml',
  }
}
