'use client'

import { DetailedHTMLProps, FocusEventHandler, InputHTMLAttributes, useRef, useState } from 'react'
import { type ChangeEventHandler } from 'react'

type Props = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
  label?: string
  required?: boolean
  autoFocus?: boolean
  readonly?: boolean
  disabled?: boolean
  heplerText?: string
  errorMessage?: string
  labelCss?: string
  describedCss?: string
  errorCss?: string
}

// 全角数字はinput type="number"で扱えないので半角変換
const convertToHalfCharNumber = (value: string) => {
  const halfCharNumber = value
    .replace(/[０-９]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 65248)
    })
    .replace(/[^0-9]/g, '')
  return halfCharNumber
}

/**
 * 制御コンポーネントのinput（ラベル、エラーメッセージ、補助テキストを表示可能）←この制御があるので、stateをvalueへ渡すこと
 * 金額や郵便番号などを入力させたい場合、type="text",inputMode="numeric"を渡すと自動で全角数字→半角数字変換します
 * Tailwind + htmlで作成
 * @param props {@link Props}
 * @returns
 */
const InputText = (props: Props) => {
  const {
    id,
    name,
    label,
    value,
    type,
    onChange,
    onBlur,
    required,
    autoFocus,
    placeholder,
    readonly,
    disabled,
    heplerText,
    inputMode,
    errorMessage,
    className,
    labelCss = `block text-gray-700 text-sm font-bold mb-2`,
    describedCss = 'block text-gray-700 text-sm mb-2',
    errorCss = 'text-red-500 text-xs',
    // フォーム内で複数項目のバリデーションした際、修正させたい項目となった場合にtrueにしてください
    'aria-invalid': ariaInvalid,
    ...rest
  } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const [inputError, setInputError] = useState(!inputRef?.current?.checkValidity())

  // onChangeの関数ラッパー
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!inputRef?.current?.checkValidity()) {
      setInputError(true)
    } else {
      setInputError(false)
    }
    if (onChange) onChange(event)
  }

  // windowsのIMEで表示される左上のボックスによる重複入力が制御できないのでonChangeだと相性悪い（inputMode指定で入力形式は自動で変わるブラウザが多いはずなので問題ない）
  //   // 全角数字が入力された際に半角数字へ変換するonBlurのラッパー
  const onBlurWrapper: FocusEventHandler<HTMLInputElement> = (event) => {
    if (type === 'text' && inputMode === 'numeric') {
      event.target.value = convertToHalfCharNumber(event.target.value)
      // stateやrefの状態を変更する
      if (onChange) onChange(event)
    }
    if (onBlur) onBlur(event)
  }
  const inputCssClass = `shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline aria-invalid:border-red-500 ${
    className ?? ''
  }`

  return (
    <div>
      <label htmlFor={id} className={labelCss}>
        {label}
      </label>
      {/* アクセシビリティ考慮しているが、足りない部分もあるかも */}
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        required={required}
        disabled={disabled}
        aria-invalid={inputError ? true : ariaInvalid}
        aria-describedby={heplerText ? `${id}-describe` : undefined}
        aria-errormessage={`${id}-error`}
        onChange={handleChange}
        inputMode={inputMode}
        placeholder={placeholder}
        readOnly={readonly}
        autoFocus={autoFocus}
        ref={inputRef}
        // tailwindcssなどのクラスはここで渡される
        className={inputCssClass}
        onBlur={onBlurWrapper}
        {...rest}
      />
      {/* ヘルパーテキスト */}
      {heplerText ? (
        <p id={`${id}-describe`} className={describedCss}>
          {heplerText}
        </p>
      ) : null}
      {/* エラーメッセージ */}
      {inputError ? (
        <p id={`${id}-error`} className={errorCss}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  )
}

export default InputText
