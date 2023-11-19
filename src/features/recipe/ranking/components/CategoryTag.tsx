import Tag, { TagProps } from '@/src/components/label/Tag'

/**
 * RecipesListで用いるカテゴリー用のタグコンポーネント
 * デフォルトのスタイルを当てるラッパー
 * @param param0
 * @returns
 */
const CategoryTag = ({ label, className, key, id }: TagProps) => {
  return (
    <Tag label={label} className={`mr-4 bg-green-100 text-black ${className}`} key={key} id={id} />
  )
}

export default CategoryTag
