'use client'
import { useForm } from 'react-hook-form'
import InputText from '@/src/components/InputText'

type FormData = {
  recipeName: string
  explain?: string
}
// registerの戻り値メモ
// type UseFormRegisterReturn<TFieldName extends InternalFieldName = InternalFieldName> = {
//     onChange: ChangeHandler;
//     onBlur: ChangeHandler;
//     ref: RefCallBack;
//     name: TFieldName;
//     min?: string | number;
//     max?: string | number;
//     maxLength?: number;
//     minLength?: number;
//     pattern?: string;
//     required?: boolean;
//     disabled?: boolean;
// };

const NewRecipeForm = () => {
  const {
    register,
    // setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  // バックエンドないのでダミー
  const onSubmit = handleSubmit((data) => console.log(data, errors))
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={onSubmit} className='w-1/3'>
      <div className='flex  flex-col gap-8'>
        <InputText {...register('recipeName')} id={'recipeName'} label={'レシピ名'} />
        <div>
          <label className='mb-2 block text-sm font-bold text-gray-700' htmlFor='explain'>
            作り方
          </label>
          <textarea {...register('explain')} id={'explain'} rows={4} className='w-full' />
        </div>
      </div>
      <button
        type='submit'
        onClick={() => {
          //   setValue('explain', 'luo') // ✅
          //   setValue('recipeName', ) // ❌: true is not string
          //   errors.recipeName // ❌: property bill does not exist
        }}
      >
        投稿ボタン
      </button>
    </form>
  )
}

export default NewRecipeForm
