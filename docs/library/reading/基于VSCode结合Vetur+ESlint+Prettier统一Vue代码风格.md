
## 插件安装

安装`Vetur`，`ESlint`， `Prettier - Code formatter`插件

## settings配置

### 配置文件所在路径

`User`配置：`%HOMEPATH%\AppData\Roaming\Code\User\settings.json`

`Workerspace`配置：`PROJECT_HOME\.vscode\settings.json`

说明：`User`配置为全局配置, 适用于所有的打开的实例，而`Workspace`配置储存在工作区之下并仅适用于本工作区的配置，显然，`Workspace`配置优先于`User`配置被使用

### settings.json配置

File -> Preferences -> Settings，选择User、Workspace 配置tab标签后，点击图示按钮，即可打开settings.json配置文件

<!-- ![配置图]("../../public/assets/jckbl4ecjn.png" 配置图) -->

粘贴或修改以下配置至文件中。

```json
{
  // 界面配置路径 Text Editor
  "editor.wordWrap": "bounded", // 设置 超过word Wrap Column设置的字符数、达到视口最小宽度，时自动换行
  "editor.wordWrapColumn": 120, // editor.wordWrap 配置为wordWrapColumn或者bounded时起作用
  "editor.insertSpaces": true, // 设置输入tab键时是否自动转为插入空格（默认ture，即自动转空格）,当editor.detectIndentation配置为 true 时，该配置项将被自动覆盖
  "editor.detectIndentation": false, // 设置是否自动检测对齐，控制打开文件时是否基于文件内容，自动检测editor.tabSize 和editor.insertSpaces

  // 界面配置路径 Text Editor -> Font
  "editor.fontSize": 14, // 设置字体大小， 默认 14

  //界面配置路径 Text Editor -> Files
  "files.autoSave": "afterDelay", //设置延迟一定的时间后自动保存文件
  "files.autoSaveDelay": 1000, // 设置自动保存文件前需要延迟的时间，单位毫秒 默认1000
  "files.enableTrash": true, // 设置删除文件、目录时是否允许删除到操作系统回收站，默认为true，即允许
  "files.encoding": "utf8", // 设置读写文件时所用编码 默认UTF-8，可针对每种语言进行设置
  "files.autoGuessEncoding": false, // 设置打开文件时，是否自动猜测字符编码，默认false，即不自动猜测，可针对每种语言进行设置
  // 界面配置路径 Text Editor -> Formatting
  "editor.formatOnPaste": true, // 设置黏贴内容时是否自动格式化，true表示自动格式化，需要配置格式化器(formatter)才可使用
  "editor.formatOnSave": true, // 设置保存文件时是否自动格式化，true表示自动格式化,需要配置格式化器(formatter)才可使用
  "editor.formatOnSaveMode": "file", // 设置保存文件时格式化整个文件还是仅被修改处。该配置项仅在 "editor.formatOnPaste" 为 true时生效
  "editor.formatOnType": true, // 设置输入完成后是否自动格式化当前行

  // 界面配置路径 Text Editor -> Minimap
  "editor.minimap.maxColumn": 120, // 设置minimap的宽度以设置可渲染的最大列数，默认120

  // 界面配置路径 Text Editor -> Suggestions
  "editor.quickSuggestions": null, // 默认选项为on 设置回车时是否接受默认建议选项

  // Eslint插件配置
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true // 设置保存时是否自动修复代码
  },
  // 界面配置路径 Extensiosn -> ESlint
  "eslint.alwaysShowStatus": true, // 设置状态栏是否一直显示ESlint图标项，true表示一直显示
  "eslint.format.enable": true, // 设置是否把ESlint作为一个格式化器，true表示启用

  // Prettier插件配置
  // 界面配置路径 Extensiosn -> Prettier
  "prettier.enable": true, // 设置是否开启prettier插件，默认为true，即开启
  "prettier.semi": false, // 设置是否在每行末尾添加分号，默认为 true
  "prettier.singleQuote": true, // 设置格式化时，保持单引号，如果设置为true，则单引号会自动变成双引号
  "prettier.tabWidth": 2, // 设置每个tab占用多少个空格
  "prettier.printWidth": 120, // 设置每行可容纳字符数
  "prettier.useTabs": false, // 设置是否使用tab键缩进行，默认为false，即不使用
  "prettier.bracketSpacing": true, // 在对象，括号与文字之间加空格 true - Example: { foo: bar }   false - Example: {foo: bar}， 默认为true
  "prettier.jsxBracketSameLine": true, // 设置在jsx中，是否把'>' 单独放一行，默认为false，即单独放一行
  // 设置各种代码的默认格式化器//以下为默认配置
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },

  // Vetur插件配置
  "vetur.format.enable": true, // 设置是否禁用插件格式化功能 // 默认为true，即开启
  "vetur.format.defaultFormatter.css": "prettier", // 设置css代码(<style>包含的代码块）默认格式化器
  "vetur.format.defaultFormatter.sass": "sass-formatter",
  "vetur.format.defaultFormatter.postcss": "prettier",
  "vetur.format.defaultFormatter.scss": "prettier",
  "vetur.format.defaultFormatter.less": "prettier",
  "vetur.format.defaultFormatter.stylus": "stylus-supremacy",
  "vetur.format.defaultFormatter.html": "prettier", // 设置html代码(<template>包含的代码块)默认格式化器
  "vetur.format.defaultFormatter.js": "prettier-eslint", // 设置js代码<script>包含的代码块）默认格式化器
  "vetur.format.defaultFormatter.ts": "prettier", // 设置vetur默认使用 prettier格式化代码
  "vetur.format.options.tabSize": 2, // 设置tab键占用的空格数，该配置将被所有格式化器继承
  "vetur.format.options.useTabs": false, // 设置是否使用tab键缩进 默认false，即不使用，该配置将被所有格式化器继承
  //"vetur.ignoreProjectWarning": true // 控制是否忽略关于vscode项目配置错误的告警，默认为false，即不忽略
}
```

## 设置默认格式化插件

右键代码编辑区，选择`Format Document WIth` 弹出提示框如下，选择`Configure Default Formatter...`进一步选择默认格式化器,

<!-- ![配置格式化程序]('../../public/assets/19y9yko0eq.png') -->

或者选中要格式化的代码，按`Alt+Shift+F`，未设置默认格式化器的时候，会弹出配置默认格式化器的提示，然后按提示操作即可

原文地址：<https://cloud.tencent.com/developer/article/1802491>
