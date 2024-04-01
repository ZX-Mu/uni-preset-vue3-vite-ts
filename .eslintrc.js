module.exports = {
    root: true,
    env: {
        es2021: true,
        node: true,
    },
    parser: 'vue-eslint-parser',
    extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['vue', '@typescript-eslint'],
    ignorePatterns: ['uni_modules'],
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/valid-v-for': 'off',
    },
}
