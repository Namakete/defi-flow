import vueParser from 'vue-eslint-parser';
import vue from 'eslint-plugin-vue';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module'
      },
      globals: {
        browser: true,
        node: true,
        es2021: true
      }
    },
    plugins: {
      vue,
      prettier
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true
        }
      ]
    }
  }
];
