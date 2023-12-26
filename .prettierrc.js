// prettier.config.js, .prettierrc.js, prettier.config.cjs, or .prettierrc.cjs
/** @type {import("prettier").Config} */
const config = {
    // 尾随逗号
    trailingComma: 'es5',
    printWidth: 80,
    // 缩进空格
    tabWidth: 4,
    // 无分号
    semi: false,
    // 括号的空格
    bracketSpacing: true,
    // 尽可能省略箭头函数括号
    arrowParens: 'avoid',
    singleQuote: true,
    bracketSpacing: true,
}

module.exports = config
