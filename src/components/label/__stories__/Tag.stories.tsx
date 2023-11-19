import Tag from '../Tag'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Tag> = {
  title: 'Tag',
  component: Tag,
}

export default meta
const Template: StoryFn<typeof Tag> = (args) => {
  return (
    <div style={{ maxWidth: '20rem' }}>
      <Tag {...args} />
    </div>
  )
}

const defaultArgs = {
  id: 'tag-id',
  label: 'テスト用ラベル',
}

export const DefaultTag = Template.bind({})
DefaultTag.args = {
  ...defaultArgs,
  label: 'ラベルです',
  className: '',
}
