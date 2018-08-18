// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁止空语句（可在空语句写注释避免）
    'no-empty': 'error',
    // 允许 async-await
    'generator-star-spacing': 0,
    // 禁止使用拖尾逗号，如{demo: 'test',}
    'comma-dangle': ['error', 'never'],
    // 操作符周围有空格
    'space-infix-ops': 'error',
    // 注释前有空白
    'spaced-comment': ['error', 'always']
  }
}
