import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  // 普通じゃschemaを提供していないので、customFetchで取得する
  schema: { 'https://dinner-ranking.prismic.io/graphql': { customFetch: 'codegen-prismic-fetch' } },
  documents: 'src/**/*.gql',
  generates: {
    'src/gql/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
