import { CheckIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

/**
 * TODO:後でリファクタリング
 * TOFIX:選択肢が現在はダミーの固定値になっているので、コンポーネントとしてprops受け取るようにする
 */
const SingleSelect = () => (
  <Select.Root>
    <Select.Trigger>
      <Select.Value />
      <Select.Icon />
    </Select.Trigger>

    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport className='rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800'>
          <Select.Item
            value={'aaa'}
            className='relative flex h-8 select-none items-center px-4 leading-none'
          >
            <Select.ItemText>aaa</Select.ItemText>
            <Select.ItemIndicator className='absolute left-0 inline-flex items-center'>
              <CheckIcon />
            </Select.ItemIndicator>
          </Select.Item>

          <Select.Group>
            <Select.Label />
            <Select.Item
              value={'bbb'}
              className='relative flex h-8 select-none items-center px-4 leading-none'
            >
              <Select.ItemText>bbb</Select.ItemText>
              <Select.ItemIndicator className='absolute left-0 inline-flex items-center'>
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Group>

          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
        <Select.Arrow />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
)

export default SingleSelect
