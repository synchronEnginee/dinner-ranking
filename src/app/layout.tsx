import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/src/providers'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '夕食ランキング',
  description: '夕食で人気の料理をランキング形式で紹介',
  // クローラーにインデックスさせない
  robots: {
    index: false, // noindexの設定
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <div className='mx-auto min-h-screen w-full bg-white sm:w-3/4'>
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
