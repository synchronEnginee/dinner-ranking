import * as prismic from '@prismicio/client'
import { GraphQLClient } from 'graphql-request'
import Image from 'next/image'
// import { createClient } from '../../../prismicio'
import { AllRecipesDocument } from '@/src/gql/graphql'
// GraphQL Client - prismicio.j

// The rest of the file...
const prismicClient = prismic.createClient('dinner-ranking', {
  // If your repository is private, add an access token
  accessToken: '',

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: 'page',
      path: '/:uid',
    },
    {
      type: 'recipe',
      path: '/recipe',
    },
  ],
})
const client = new GraphQLClient(prismic.getGraphQLEndpoint('dinner-ranking'), {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fetch: prismicClient.graphQLFetch as (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => Promise<Response>,
  method: 'get',
  headers: { 'Prismic-Ref': 'ZTZ_BhIAACMA0hUI' },
})

const RecipeRanking = async () => {
  // const client = createClient()

  // prismicioからrecipe型のデータを取得
  // const recipes = await client.getAllByType('recipe')
  // TOFIX:後で環境変数で切り出す
  const recipes = await client.request(AllRecipesDocument)
  const lastRecipeNumber = recipes.allRecipes.totalCount - 1
  const isNotNullRecipes = recipes.allRecipes.edges ?? []

  return (
    <main>
      <h1>登録済みのレシピ</h1>
      <div className='mx-auto w-full p-8 sm:w-[800px]'>
        {/* TOFIX:ランキング表示のコンポーネントはfeatures配下へ移動する */}
        {isNotNullRecipes.map((recipe, i) => {
          const n = recipe?.node
          return n ? (
            <div key={n._meta.id} className='my-8'>
              <div key={n._meta.id} className='font-bold'>{`料理名：${n.name}`}</div>
              <div key={n._meta.id}>{`カテゴリー：${n.category}`}</div>
              <div key={n._meta.id}>{`メイン食材：${n.mainfood}`}</div>

              <Image
                key={n._meta.id}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-non-null-asserted-optional-chain, @typescript-eslint/no-unsafe-member-access
                src={n.image.url!}
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                alt={n.image.alt!}
                width='800'
                height='600'
              />
              <div key={n._meta.id}>{`説明：`}</div>
              {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
                n.description.map((v: string, i: number) => (
                  <div key={i}>{(v as unknown as { text: string }).text}</div>
                ))
              }
              {lastRecipeNumber !== i && <hr className='my-4 border-2 border-solid border-black' />}
            </div>
          ) : null
        })}
      </div>
    </main>
  )
}

export default RecipeRanking
