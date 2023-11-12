import * as prismic from '@prismicio/client'
import { GraphQLClient } from 'graphql-request'
// アプリ全体で共通のprismicClient
// The rest of the file...
const prismicClient = prismic.createClient('dinner-ranking', {
  // If your repository is private, add an access token
  // accessTokenはここにも設定しないとinvalid access token になってしまいます
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,

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

// アプリ全体で共通のprismicへのGraphQLClient
const client = new GraphQLClient(prismic.getGraphQLEndpoint('dinner-ranking'), {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  fetch: prismicClient.graphQLFetch as (
    input: RequestInfo | URL,
    init?: RequestInit | undefined,
  ) => Promise<Response>,
  method: 'get',
  // prismicで生成したapischemaのバージョン((https://dinner-ranking.prismic.io/api/v2))
  // APIのtoken(https://dinner-ranking.prismic.io/settings/apps/)
  // tokenはBearerで仕込む(https://prismic.io/docs/integration#add-an-authorization-token)
  headers: {
    'Prismic-Ref': process.env.PRISMIC_REF ?? '',
    Authorization: `Bearer ${process.env.PRISMIC_ACCESS_TOKEN}`,
  },
})
console.log(client)

export default client
