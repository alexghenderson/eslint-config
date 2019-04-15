module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'react-app', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        paths: [
          {rootPathPrefix: '~', rootPathSuffix: './src'},
          {rootPathPrefix: '#', rootPathSuffix: '.'},
        ],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 0,
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};
