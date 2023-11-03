/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // (A)
    'plugin:@typescript-eslint/recommended-requiring-type-checking', // (B)
    // react-queryのプラグイン
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'next/core-web-vitals',
    'prettier',
  ],
  settings: {
    'import/external-module-folders': ['.yarn', 'node_modules'], // yarn PnPを使用している場合にもインストールした依存関係がexternalと認識されるようにする。'.yarn'を追加しない場合には、internalとして認識される。
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', '@tanstack/query'],
  rules: {
    'import/order': [
      'error',
      {
        // 記述した順番で並び替えられる
        groups: [
          'builtin', // node "builtin" module
          'external', // "external" module
          'internal', // "internal" module
          ['parent', 'sibling', 'index'], // 左から「親ディレクトリ」、「兄弟ディレクトリ」、「カレントディレクトリ」
          'object', // "object"-imports
          'type', // "type" imports
        ],
        // パスでグループ化する
        pathGroups: [
          {
            pattern: '@/**',
            group: 'parent',
            position: 'before', // groupに対しての相対的な位置
          },
        ],
        // pathGroupsによって処理されないインポートタイプを指定
        pathGroupsExcludedImportTypes: [
          'builtin',
          'external',
          'object',
          'type', // "type" importは'@/**'に該当しても最後に配置される
        ],
        // 各グループ内の順序をアルファベット順で並べ替える
        alphabetize: {
          order: 'asc', // 昇順
          caseInsensitive: true, // 大文字、小文字を区別しない
        },
        'newlines-between': 'never', // グループごとに空行を挿入するか
      },
    ],
    '@tanstack/query/exhaustive-deps': 'error',
    '@tanstack/query/stable-query-client': 'error',
  },
}
