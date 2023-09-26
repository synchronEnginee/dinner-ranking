import { CheckIcon } from '@radix-ui/react-icons'
import * as Select from '@radix-ui/react-select'

type Props = {
  selectItems: Array<{ value: string; label: string }>
  placeholder?: string
  ariaLabel?: string
}
/**
 * propsで選択肢を渡す
 * 一つのみ選択可能
 * 選択するとチェックマークがつく
 */
const SingleSelect = (props: Props) => (
  <Select.Root>
    <Select.Trigger aria-label={props.ariaLabel}>
      <Select.Value placeholder={props?.placeholder} />
      <Select.Icon />
    </Select.Trigger>

    <Select.Portal>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport className='rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800'>
          <Select.Group>
            {props.selectItems.map((item) => (
              <Select.Item
                value={item.value}
                className='relative flex h-8 select-none items-center px-4 leading-none'
                key={item.value}
              >
                <Select.ItemText>{item.label}</Select.ItemText>
                <Select.ItemIndicator className='absolute left-0 inline-flex items-center'>
                  <CheckIcon />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
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
