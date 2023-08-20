import { useState } from 'react'
import InputText from '../InputText'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof InputText> = {
  title: 'InputText',
  component: InputText,
}

export default meta
const Template: StoryFn<typeof InputText> = (args) => {
  const [value, setValue] = useState('1')
  return (
    <div style={{ maxWidth: '20rem' }}>
      <InputText
        {...args}
        value={value}
        onChange={(event) => {
          setValue(event.target.value)
        }}
      />
    </div>
  )
}

const defaultArgs = {
  id: '',
  value: undefined,
  label: 'テスト用ラベル',
}

export const TextField = Template.bind({})
TextField.args = {
  ...defaultArgs,
  label: 'ひらがな入力',
  placeholder: 'あいうえお',
  maxLength: 10,
  minLength: 2,
  pattern: '^[あ-ん]*$',
  errorMessage: 'ひらがなのみです',
}

export const NumberField = Template.bind({})
NumberField.args = {
  ...defaultArgs,
  label: '金額',
  placeholder: '10000',

  maxLength: 6,
  minLength: 2,
  errorMessage: 'test',
  type: 'text',
  inputMode: 'numeric',
}

export const EmailField = Template.bind({})
EmailField.args = {
  ...defaultArgs,
  label: 'メールアドレス',
  placeholder: 'aaa@gmail.com',

  type: 'email',
  errorMessage: '有効なメールアドレス形式で入力してください',
}
