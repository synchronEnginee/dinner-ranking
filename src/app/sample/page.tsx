import { Popover, PopoverTrigger, PopoverContent } from '@/src/components/popover/Popover'
import { Sample } from '@/src/components/Sample'

const SamplePage = () => {
  return (
    <>
      <Sample />
      <Popover>
        <PopoverTrigger className='radix-state-open:border-2 border-black'>
          開閉ボタン
        </PopoverTrigger>
        <PopoverContent className='mt-4 whitespace-pre-wrap text-xl'>
          {'サンプルページの補足内容です\n内容を読んでください'}
        </PopoverContent>
      </Popover>
    </>
  )
}

export default SamplePage
