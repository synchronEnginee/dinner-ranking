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
    selectItems={[
      { label: '選択肢1', value: '値1' },
      { label: '選択肢2', value: '値2' },
    ]}
    placeholder='あああ'
  />
)
