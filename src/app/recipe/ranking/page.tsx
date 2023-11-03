'use client'
import { Suspense } from 'react'
import RecipesList from '@/src/features/recipe/ranking/RecipesList'
// import { createClient } from '../../../prismicio'

const RecipeRanking = () => {
  return (
    <main>
      <h1>登録済みのレシピ</h1>
      <Suspense fallback={<div>Now Loading...</div>}>
        <RecipesList />
      </Suspense>
    </main>
  )
}

export default RecipeRanking
