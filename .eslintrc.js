module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: ['airbnb', 'airbnb-typescript', 'airbnb/hooks', 'plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-requiring-type-checking', 'plugin:react/jsx-runtime', 'prettier', 'plugin:storybook/recommended'],
  parserOptions: {
    project: './tsconfig.json'
  },
  rules: {
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'arrow-body-style': 'off',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-else-return': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'prefer-destructuring': 'off'
  }
};