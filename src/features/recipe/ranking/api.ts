import { AllRecipesDocument } from '@/src/gql/graphql'
import client from '@/src/graphql/prismic/client'

/**
 * 全レシピを取得するフェッチ関数
 */
export const getRecipes = async () => {
  const recipes = await client.request(AllRecipesDocument)
  return recipes
}
