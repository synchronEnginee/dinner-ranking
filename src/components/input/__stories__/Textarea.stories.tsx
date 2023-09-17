// src/components/Textarea.stories.tsx

import { Meta } from '@storybook/react'
import React from 'react'
import Textarea from '../Textarea'

const meta: Meta<typeof Textarea> = {
  title: 'Textarea',
  component: Textarea,
}

export default meta

// const Template: StoryFn<typeof Textarea> = (args) => {
//   const [value, setValue] = useState<string>('')
//   return (
//     <div style={{ maxWidth: '30rem' }}>
//       <Textarea
//         {...args}
//         value={value}
//         onChange={(event) => {
//           setValue(event.target.value)
//         }}
//       />
//     </div>
//   )
// }

export const Default = () => (
  <Textarea
    label='Label Text'
    id='textarea-1'
    placeholder='Type something...'
    rows={4}
    className='w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring'
  />
)

export const WithoutLabel = () => (
  <Textarea
    id='textarea-2'
    placeholder='Type something...'
    rows={4}
    className='w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring'
  />
)

export const CustomLabelStyle = () => (
  <Textarea
    label='Custom Label'
    labelClassName='mb-4 block text-lg font-semibold text-red-600'
    id='textarea-3'
    placeholder='Type something...'
    rows={4}
    className='w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring'
  />
)
