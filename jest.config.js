// jest.config.js
module.exports = {
  preset: "ts-jest",
  // ts-jest[ts-jest-transformer] (WARN) Define `ts-jest` config under `globals` is deprecated.
  //   globals: {
  //     "ts-jest": {
  //       tsconfig: "./tsconfig.test.json",
  //     },
  //   },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        //the content you'd placed at "global"
        babel: true,
        tsconfig: "tsconfig.test.json",
      },
    ],
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    // // Handle CSS imports (with CSS modules)
    // // https://jestjs.io/docs/webpack#mocking-css-modules
    // '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

    // // Handle CSS imports (without CSS modules)
    // '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

    // // Handle image imports
    // // https://jestjs.io/docs/webpack#handling-static-assets
    // '^.+\\.(png|jpg|jpeg|gif|webp|avif|ico|bmp|svg)$/i': `<rootDir>/__mocks__/fileMock.js`,

    // Handle module aliases
    "^@/(.*)$": "<rootDir>/$1",
  },
};
