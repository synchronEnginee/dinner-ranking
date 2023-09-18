import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Textarea from '../Textarea'

describe('Textarea Component', () => {
  it('renders with a label', () => {
    const label = 'Test Label'
    render(<Textarea label={label} id='test-textarea' />)

    // ラベルが表示されていることを確認
    expect(screen.getByText(label)).toBeInTheDocument()

    // テキストエリアが表示されていることを確認
    expect(screen.getByRole('textbox')).toBeInTheDocument()

    // テキストエリアとラベルの関連付けを確認
    const textarea = screen.getByRole('textbox')
    const textareaLabel = screen.getByText(label)
    expect(textarea).toHaveAttribute('id', 'test-textarea')
    expect(textareaLabel).toHaveAttribute('for', 'test-textarea')

    // アクセシビリティを確認
    expect(textarea).toHaveAccessibleName(label)
  })

  it('renders without a label', () => {
    render(<Textarea id='test-textarea' />)

    // アクセシビリティを確認
    const textarea = screen.getByRole('textbox')
    expect(textarea).toHaveAccessibleName('') // ラベルがない場合は空
  })

  it('handles input correctly', async () => {
    render(<Textarea id='test-textarea' />)
    const textarea: HTMLTextAreaElement = screen.getByRole('textbox')

    // テキストを入力
    await userEvent.type(textarea, 'Test input')

    // テキストが正しく入力されたことを確認
    expect(textarea.value).toBe('Test input')
  })
})
