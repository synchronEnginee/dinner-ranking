import { getRecipes } from '@/src/features/recipe/ranking/api'
import { useQueryDefault } from '@/src/hooks/tanstackQuery'

/**
 * useQueryを利用してキャッシュするgetRecipes
 * ページからは呼ぶだけでフェッチされる
 * @returns getRecipesの結果
 */
const useGetRecipesQuery = () => useQueryDefault({ queryKey: ['getRecipes'], queryFn: getRecipes })

export default useGetRecipesQuery
