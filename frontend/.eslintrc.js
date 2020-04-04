module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'import-helpers/order-imports'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', {'devDependencies': true}],
    'comma-dangle': ['error', {
      'arrays': 'always',
      'objects': 'always-multiline',
      'imports': 'always-multiline',
      'exports': 'always',
      'functions': 'never'
  }],
  'import-helpers/order-imports': [
    'warn',
    {
        newlinesBetween: 'always', // new line between groups
        groups: [
            '/^react/',
            'module',
            '/^~/',
            ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
    },
  ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }
    }
  }
};
