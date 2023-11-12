import { AllRecipesDocument } from '@/src/gql/graphql'
import client from '@/src/graphql/prismic/client'
// import * as prismic from '@prismicio/client'

/**
 * 全レシピを取得するフェッチ関数
 */
export const getRecipes = async () => {
  // const repositoryName = 'dinner-ranking'
  // const client2 = prismic.createClient(repositoryName, {
  //  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  //   fetch
  // })
  // await client2.dangerouslyGetAll()

  const recipes = await client.request(AllRecipesDocument).catch((reason) => console.log(reason))
  return recipes
}
