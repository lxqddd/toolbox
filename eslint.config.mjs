// eslint.config.mjs
import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'no-console': 'off',
    'vue/component-tags-order': 'off',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    '@typescript-eslint/semi': ['error', 'never'],
    'no-debugger': 'off',
    'no-restricted-syntax': 'off',
    '@typescript-eslint/consistent-type-imports': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'curly': 'off',
    'n/prefer-global/process': 'off',
    '@typescript-eslint/brace-style': 'off',
    '@typescript-eslint/no-var-requires': 'off',
  }
})
