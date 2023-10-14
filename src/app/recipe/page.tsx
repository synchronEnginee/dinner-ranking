import Image from 'next/image'
import NewRecipeForm from '@/src/features/recipe/NewRecipeForm'
// import { type RecipeDocument } from '../../../prismicio-types'
import { createClient } from '../../prismicio'

// type Props = {
//   recipes: RecipeDocument[]
// }

const PostRecipe = async () => {
  const client = createClient()

  // prismicioからrecipe型のデータを取得
  const recipes = await client.getAllByType('recipe')

  return (
    <main>
      <h1>レシピ投稿</h1>
      <NewRecipeForm />
      {/* TOFIX後でページ移動 */}
      <h2>登録済みのレシピ</h2>
      <div className='w-800 p-8'>
        {recipes.map((recipe) => (
          <div key={recipe.id} className='my-8'>
            <div key={recipe.id}>{`カテゴリー：${recipe.data.category}`}</div>
            <div key={recipe.id}>{`メイン食材：${recipe.data.mainFood}`}</div>

            <Image
              key={recipe.id}
              src={recipe.data.image.url!}
              alt={recipe.data.image.alt!}
              width='800'
              height='600'
            />
            <div key={recipe.id}>{`説明：`}</div>
            {recipe.data.description.map((v, i) => (
              <div key={i}>{(v as { text: string }).text}</div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}

// getStaticPropsはnext13で廃止されており、素のreactと同じく普通にフェッチするだけでよい
// export const getStaticProps: GetStaticProps = async ({ previewData }) => {
//   const client = createClient({ previewData })

//   const recipes = await client.getAllByType('recipe')

//   return {
//     props: { recipes },
//   }
// }

export default PostRecipe
