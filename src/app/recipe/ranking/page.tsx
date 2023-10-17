import Image from 'next/image'
import { createClient } from '../../../prismicio'

const RecipeRanking = async () => {
  const client = createClient()

  // prismicioからrecipe型のデータを取得
  const recipes = await client.getAllByType('recipe')
  const lastRecipeNumber = recipes.length - 1

  return (
    <main>
      <h1>登録済みのレシピ</h1>
      <div className='mx-auto w-full p-8 sm:w-[800px]'>
        {/* TOFIX:ランキング表示のコンポーネントはfeatures配下へ移動する */}
        {recipes.map((recipe, i) => (
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
            {lastRecipeNumber !== i && <hr className='my-4 border-2 border-solid border-black' />}
          </div>
        ))}
      </div>
    </main>
  )
}

export default RecipeRanking
