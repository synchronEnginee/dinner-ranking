import { render, screen } from '@testing-library/react'
import Sample from '../../features/sample/Sample'

describe('Sampleコンポーネント', () => {
  test('should first', () => {
    render(<Sample />)
    expect(screen.getByText('Nextjs+Tailwindのサンプルアプリ')).toBeTruthy()
  })
})
