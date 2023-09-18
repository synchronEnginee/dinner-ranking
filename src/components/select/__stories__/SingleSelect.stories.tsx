// src/components/SingleSelect.stories.tsx

import { Meta } from '@storybook/react'
import React from 'react'
import SingleSelect from '../SingleSelect'

const meta: Meta<typeof SingleSelect> = {
  title: 'SingleSelect',
  component: SingleSelect,
}

export default meta

// const Template: StoryFn<typeof SingleSelect> = (args) => {
//   const [value, setValue] = useState<string>('')
//   return (
//     <div style={{ maxWidth: '30rem' }}>
//       <SingleSelect
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
  <SingleSelect
  // label='Label Text'
  // id='SingleSelect-1'
  // placeholder='Type something...'
  // rows={4}
  // className='w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring'
  />
)
