## VSCode使用心得

#### 插件
```bash
Atom One Dark Theme
Auto Rename Tag
vscode-language-babel
Chinese (Simplified) Language Pack for Visual Studio Code
Code Spell Checker
Docker
ESLint
Hopscotch (Official)
IntelliJ IDEA Keybindings
minapp-vscode
Path Intellisense
PHP Debug
PHP Extension Pack
PHP IntelliSense
Prettier - Code formatter
Python
React-Native/React/Redux snippets for es6/es7.
Vetur
VSCode Great Icons
VueHelper
```
#### 设置
```json
{
  // 以像素为单位控制字号。
  "editor.fontSize": 15,
  // 控制编辑器是否应在键入后自动设置行的格式
  // "editor.formatOnType": true,
  "editor.tabSize": 2,
  // "php.validate.executablePath": "/usr/bin/php7.0",
  // "editor.wordWrap": "on",
  "workbench.colorTheme": "Atom One Dark",
  "terminal.integrated.fontSize": 11,
  "[markdown]": {},
  // vue_start
  "extensions.ignoreRecommendations": true, // 无视建议
  "emmet.syntaxProfiles": {
    "vue-html": "html",
    "vue": "html"
  },
  "vetur.validation.template": false,
  "eslint.options": {
    "plugins": [
      "html"
    ]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
  ],
  // "editor.formatOnSave": true, // 编辑器保存自动格式化
  "prettier.trailingComma": "all",
  "prettier.arrowParens": "always",
  "prettier.singleQuote": true,
  "prettier.semi": true,
  "prettier.jsxBracketSameLine": true,
  "vetur.format.defaultFormatter.html": "js-beautify-html",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatterOptions": {
    "wrap_attributes": "force-aligned",
    "js-beautify-html": {
      "max_preserve_newlines": 2,
      "wrap_line_length": 20,
    }
  },
  "workbench.iconTheme": "vscode-great-icons",
  // vue_end
  "auto-rename-tag.activationOnLanguage": [
    "html",
    "xml",
    "php",
    "javascript"
  ],
  "window.zoomLevel": 1.2,
  "files.associations": {
    "*.cjson": "jsonc",
    "*.wxss": "css",
    "*.wxs": "javascript"
  },
  "emmet.includeLanguages": {
    "wxml": "html"
  },
  "minapp-vscode.disableAutoConfig": true,
  "editor.wordWrap": "on",
  "[php]": {},
  "javascript.updateImportsOnFileMove.enabled": "always",
  "editor.largeFileOptimizations": false,
  // "terminal.integrated.rendererType": "dom"
}
```