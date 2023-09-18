import InputText from '@/src/components/input/InputText'
import { Popover, PopoverTrigger, PopoverContent } from '@/src/components/popover/Popover'

/**
 * サンプルの特定ユースケースのコンポーネント
 */
const Sample = () => {
  return (
    <>
      <h1>Nextjs+Tailwindのサンプルアプリ</h1>
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
    </>
  )
}

export default Sample
