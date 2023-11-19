import { render } from '@testing-library/react'
import Tag from '../Tag'

test('renders tag with correct label', () => {
  const { getByText } = render(<Tag label='Test Tag' />)
  const tagElement = getByText(/Test Tag/i)
  expect(tagElement).toBeInTheDocument()
})

test('renders tag with id and className', () => {
  const { container } = render(<Tag label='Test Tag' id='test-id' className='custom-class' />)
  const tagElement = container.firstChild
  expect(tagElement).toHaveAttribute('id', 'test-id')
  expect(tagElement).toHaveClass('custom-class')
})
