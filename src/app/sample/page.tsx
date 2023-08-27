import InputText from '@/src/components/InputText'
import { Popover, PopoverTrigger, PopoverContent } from '@/src/components/popover/Popover'
import { Sample } from '@/src/components/Sample'

const SamplePage = () => {
  return (
    <main>
      <Sample />
      <div className='flex w-1/2 justify-between'>
        <Popover>
          <PopoverTrigger className='border-2 border-black radix-state-open:bg-red-50'>
            サンプル開閉ボタン
          </PopoverTrigger>
          <PopoverContent className='mt-4 whitespace-pre-wrap text-xl'>
            {'サンプルページの補足内容です\n内容を読んでください'}
          </PopoverContent>
        </Popover>

        {/* 非制御 */}
        <InputText
          id='recipe-name'
          label='サンプルテキストフィールド'
          placeholder='ハンバーグ'
          type='text'
        />
      </div>
    </main>
  )
}

export default SamplePage
