import { twMerge } from 'tailwind-merge'
export type TagProps = {
  label: string
  id?: string
  className?: string
  key?: string
}

/**
 * タグの見た目のコンポーネント
 * 複数並べる場合は一意なkeyを渡してください
 *
 * @param tagProps {@link TagProps}
 * @returns
 */
const Tag = ({ label, id, className, key }: TagProps) => {
  // tailwindは重複するクラスを上書する場合に後記述勝ちにならないので、専用のライブラリで除去する必要がある
  const classNames = twMerge(
    `inline-block rounded-full bg-pink-400 px-2 py-1 text-white`,
    className,
  )
  return (
    <div id={id} key={key} className={classNames}>
      {label}
    </div>
  )
}

export default Tag
