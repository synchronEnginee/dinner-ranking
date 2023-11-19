import { QueryClient, QueryKey, UndefinedInitialDataOptions, useQuery } from '@tanstack/react-query'

/**
 * アクセストークンをブラウザの持たせられないので、クライアントからフェッチできない問題がある
 * サーバー側でフェッチする初回は良いが、データが古くなどして再取得しようとするとauthorization errorになる
 */
export const useQueryDefault = <T>(
  options: UndefinedInitialDataOptions<T, Error, T, QueryKey>,
  queryClient?: QueryClient | undefined,
) => {
  // 型にあるはずだが、suspenseがプロパティにないと言われるのでasキャスト
  const options2 = {
    staleTime: 5 * 100000,

    suspense: true,
    ...options,
  } as UndefinedInitialDataOptions<T, Error, T, QueryKey>
  return useQuery(options2, queryClient)
}
