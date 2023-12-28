module.exports = {
    env: {
        browser: true,
        // 引入ES2021语言
        es2021: true,
    },
    rules: {
        // 禁止使用未声明的变量
        'no-undef': 'off',
        // 必须使用 === 和 !==
        eqeqeq: 'error',
        // 必须使用驼峰风格
        camelcase: 'error',
        // 针对控制语句必须使用大括号
        curly: 'error',
        // 最大的块元素嵌套层级
        'max-depth': ['error', 4],
        // 禁止使用alert、confirm和prompt
        'no-alert': 'error',
        // 禁止console.log();
        'no-console': 'error',
        // 禁止if语句中有return 还else return
        'no-else-return': 'error',
        // 禁止不必要的分号
        'no-extra-semi': 'error',
        // 禁止使用var
        'no-var': 'warn',
        // 一行缩进
        indent: ['error', 4],
        // 如果你正在使用 eslint-plugin-react，其中的 react/jsx-uses-react 和 react/react-in-jsx-scope 规则将不再需要，可以关闭它们或者删除。
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
    // 集成默认的react eslit插件和默认的eslint的规则
    extends: [
        'plugin:react/recommended',
        'eslint:recommended',
        'eslint-config-prettier',
        // 如果你使用的是vue.js的话
        // 'plugin:vue/vue3-recommended',
    ],
    settings: {
        react: {
            version: '^18.0.0',
        },
    },
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
}
