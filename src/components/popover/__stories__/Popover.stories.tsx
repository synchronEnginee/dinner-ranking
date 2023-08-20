import { Popover, PopoverTrigger, PopoverContent } from '../Popover'
import type { Meta, StoryFn } from '@storybook/react'

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  component: Popover,
}

type PopoverProps = {
  triggerLabel: string
  triggerClassNames: string
  contentClassNames: string
  content: string
}
export default meta
const Template: StoryFn<PopoverProps> = (args: PopoverProps) => {
  const { triggerLabel, triggerClassNames, content, contentClassNames } = args
  return (
    <div style={{ maxWidth: '20rem' }}>
      <Popover>
        <PopoverTrigger className={triggerClassNames}>{triggerLabel}</PopoverTrigger>
        <PopoverContent className={contentClassNames}>{content}</PopoverContent>
      </Popover>
    </div>
  )
}

const defaultArgs = {
  triggerLabel: '開閉ボタン',
  triggerClassNames: 'border-black radix-state-open:border-2',
  contentClassNames: 'text-xl mt-4',
  content: '内容です',
}

export const Initial = Template.bind({})
Initial.args = {
  ...defaultArgs,
}
