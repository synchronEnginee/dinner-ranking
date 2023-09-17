'use client'
import { useForm, Controller } from 'react-hook-form'
import Textarea from '@/src/components/input/Textarea'
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
    control,
    formState: { errors },
  } = useForm<FormData>()
  // バックエンドないのでダミー
  const onSubmit = handleSubmit((data) => console.log(data, errors))
  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={onSubmit} className='w-1/3'>
      <div className='flex  flex-col gap-8'>
        <Controller
          name='recipeName'
          control={control}
          rules={{ required: true, minLength: 4 }}
          render={({ field }) => (
            <InputText
              {...field}
              id={'recipeName'}
              label={'レシピ名'}
              required={true}
              minLength={4}
              errorMessage='レシピは４文字以上入力してください'
            />
          )}
        />
        {/* <InputText
        // registerの引数にrequired渡してもrequiredを渡してくれるわけではないっぽい
          {...register('recipeName', { required: true, minLength: 2 })}
          required={true}
          id={'recipeName'}
          label={'レシピ名'}
        /> */}

        <div>
          <Textarea
            {...(register('explain'), { required: true })}
            label={'作り方'}
            id={'explain'}
            rows={4}
            className='w-full'
          />
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
