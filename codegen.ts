import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  // 普通じゃschemaを提供していないので、customFetchで取得する
  schema: { 'https://dinner-ranking.prismic.io/graphql': { customFetch: 'codegen-prismic-fetch' } },
  documents: 'src/**/*.gql',
  generates: {
    'src/gql/': {
      preset: 'client',
      // pluginsはpresetと重複して生成されるので、presetに任せる
      // plugins: ['typescript-graphql-request'],
      plugins: [
        {
          // Custom Scalar の branded type 定義
          add: {
            content: `export type DateString = string & { readonly __brand: unique symbol }`,
          },
        },
      ],
      config: {
        // Scalerのany型が許されなくなる
        // strictScalars: true,
        useTypeImports: true,
        skipTypename: true,
        arrayInputCoercion: true,
        avoidOptionals: {
          field: true,
          inputValue: false,
          object: true,
          defaultValue: false,
        },
        scalars: {
          Date: 'DateString',
        },
        enumsAsTypes: true,
      },
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
}

export default config
