import Link from 'next/link'

/**
 * Topページ
 */
export default function Home() {
  return (
    <main>
      <h1>Topページ</h1>
      <Link className='underline' href='/sample'>
        Sampleページへ
      </Link>
    </main>
  )
}
