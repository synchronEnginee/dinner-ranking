import React from 'react'

type Props = {
  label?: string
  labelClassName?: string
  id?: string
} & React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

/**
 * 本アプリで使うデフォルトのテキストエリア
 * ラベルにスタイルがデフォルトで当たっている
 */
const Textarea = (props: Props) => {
  const {
    label,
    labelClassName = 'mb-2 block text-sm font-bold text-gray-700',
    id,
    ...rest
  } = props
  return (
    <>
      {label ? (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      ) : null}
      <textarea id={id} {...rest} />
    </>
  )
}

export default Textarea
