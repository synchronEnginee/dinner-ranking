import Image from 'next/image'
import Tag from '@/src/components/label/Tag'
// import useGetRecipesQuery from '@/src/features/recipe/ranking/hooks/useGetRecipesQuery'
import { getRecipes } from './api'
import CategoryTag from './components/CategoryTag'
// import { createClient } from '../../../prismicio'

const RecipesList = async () => {
  // const client = createClient()

  // prismicioからrecipe型のデータを取得
  const recipes = await getRecipes()
  // const fetchResult = useGetRecipesQuery()
  // const recipes = fetchResult.data
  if (!recipes) return null

  const lastRecipeNumber = recipes.allRecipes.totalCount - 1
  const isNotNullRecipes = recipes.allRecipes.edges ?? []

  return (
    <div className='mx-auto w-full bg-gray-50 p-8 sm:w-[800px]'>
      {/* TOFIX:ランキング表示のコンポーネントはfeatures配下へ移動する */}
      {isNotNullRecipes.map((recipe, i) => {
        const n = recipe?.node
        return n ? (
          <div key={n._meta.id} className='my-8'>
            <h3 key={n._meta.id} className='font-bold'>{`${n.name}`}</h3>
            <CategoryTag label={`${n.category}`} key={n._meta.id} />
            <Tag key={n._meta.id} label={`${n.mainfood}`} />

            <Image
              key={n._meta.id}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-non-null-asserted-optional-chain, @typescript-eslint/no-unsafe-member-access
              src={n.image.url!}
              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
              alt={n.image.alt!}
              width='800'
              height='600'
            />
            {/* <div key={n._meta.id}>{`説明：`}</div> */}
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
  )
}

export default RecipesList
