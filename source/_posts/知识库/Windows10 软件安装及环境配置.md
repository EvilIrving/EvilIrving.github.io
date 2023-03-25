---
title: Windows10 装机
date: 2021-08-01
updated: 2023-02-06
tags:
- Windows
categories: 
- 知识库
description: Windows10 系统装机后需要安装的软件和环境配置，包含VS Code、注册表等
---

## 系统

- 装系统
  - [Windows 10 Enterprise LTSC 2021](https://next.itellyou.cn/Identity/Account/Login)：[ed2k地址](ed2k://|file|SW_DVD9_WIN_ENT_LTSC_2021_64BIT_ChnSimp_MLF_X22-84402.ISO|5044211712|1555B7DCA052B5958EE68DB58A42408D|/)
  - Office Professional Plus 2016：[ed2k地址](ed2k://|file|cn_office_professional_plus_2016_x86_x64_dvd_6969182.iso|2588266496|27EEA4FE4BB13CD0ECCDFC24167F9E01|/)
  - [rufus](https://rufus.ie/zh/)：制作启动盘
- 改设置
  - 改文档地址
- 装软件
  - [微信](https://windows.weixin.qq.com/?lang=zh_CN)
  - [QQ](https://im.qq.com/pcqq)
  - [telegram](https://desktop.telegram.org/?setln=en)
  - [Chrome](https://www.google.com/intl/en_hk/chrome/)
  - [阿里云盘](https://www.aliyundrive.com/)
  - 缤纷批量修改文件名
  - [PotPlayer 64 bit](https://potplayer.daum.net/)
  - [Everything](https://www.voidtools.com/zh-cn/downloads/)
  - Bandicam
  - JiJiDownForWPF
  - [Dism++x64](https://dism.cf/)
  - 百度网盘
  - Thunder
  - [小丸工具箱](https://maruko.appinn.me/)
  - [ZoomIt](https://zoomit.en.softonic.com/)
  - [Twinkle Tray](https://twinkletray.com/)
  - Shadowfly
  - [EveryonePiano](https://www.everyonepiano.cn/)
  - [腾讯会议](https://meeting.tencent.com/download/)
  - [EarTrumpet](https://eartrumpet.app/)
  - [TrafficMonitor](https://github.com/zhongyang219/TrafficMonitor)
  - [7-zip](https://www.7-zip.org/download.html)
  - SumatraPDF
  - [clash_for_windows](https://github.com/Fndroid/clash_for_windows_pkg/releases)：[如何配置](https://docs.cfw.lbyczf.com/)
  - 网易云音乐
  - 搜狗输入法
  - ITunes
  -
- 装开发环境
  - [VS Code](https://code.visualstudio.com/download)
    - Markdown All in One
  - Android Studio
  - Idea：破解教程
  - Java JDK
  - Python
  - Nvm -> Node
  - Git
- 浏览器装插件
    > `改下载地址`,
  - 油猴插件
    - AC-baidu
    - Bilibili Evolved
    - CSDN 去广告沉浸阅读模式
    - ddrk低端影视助手
    - Github 增强 - 高速下载
    - Open the F**king URL Right Now
    - Youtube 双语字幕下载 v12 (中文+任选的一门双语,比如英语)
    - 屏蔽所有Youtube广告
    - 沉浸式翻译
    - 知乎增强
    - 自动无缝翻页
    - 隐藏youtube google广告
    - 文本选中复制
    - 贴吧页面
    - 精简jQuery API 中文文档
    - 计时器掌控者|视频广告跳过|视频广告加速器
    - 阅读全文、自动展开全文、自动移除万恶弹框
- Windows操作
  - 快速定位目录进入cmd命令
    - `tree /f >tree.txt` “`f`”参数显示子文件夹中文件名
    - `dir /s >dir.txt`  “`/s`”显示指定目录和所有子目录中的文件
    - `shutdown -s -t 30`，电脑会在30秒后关机， `at 19:30`，指定时间，`shutdown -a`，取消关机输入
  - Win+R 输入
    - `explorer.exe` 恢复桌面图标
    - `msconfig`查看电脑配置
    - `charmap` 打开字符映射表

## 问题

### Windows10 文件文件夹正在使用

#### 原因

正如提示所言，在删除文件时，提示“文件正在使用”。这是因为文件夹中的某个文件被打开了，或者该文件或文件夹正在被其他程序占用。此外，文件或文件夹感染了病毒，病毒程序正在运行时，也会无法删除文件、文件夹。

但是有时我们找不到是谁打开了文件/文件夹，此时先关闭正在打开的文件/文件夹，或者尝试重新启动电脑再删除。

#### 使用Windows资源监视器

通过Windows资源监视器，你可以查看到文件夹/文件被哪个程序占用，并结束该程序。

1. 同时按下键盘上的`Ctrl + Alt + Delete`键以打开任务管理器。
2. 进入任务管理器后，切换至“性能”选项卡，然后点击“打开资源监视器”。
3. 在资源监视器中，点击“CPU”选项卡。然后，在“搜索句柄”框中输入需要删除的文件名，再按“Enter”键。
4. 在搜索结果中，右键单击显示的进程，点击“结束进程”即可。

#### 命令提示符删除

使用命令提示符也能快速有效地删除目标文件、文件夹。但需要注意的是，此方法要有管理员身份才可进行。

1. 在搜索内容框中输入“命令提示符”。然后，右键单击匹配结果中的“命令提示符”，选择“以管理员身份运行”。
2. 打开命令提示符后，输入命令：`del c:\users\`你的用户名\文件所在的位置\文件名称，再按“Enter”即可。

> 例如：`del c:\users\RENEE-en\Desktop\test.txt`

#### 制作强制删除的文档

使用文本文档来添加一些指令并保存为bat文档，便可轻松删除无法删除的文件、文件夹。

右键单击电脑桌面，点击“新建”并选择“文本文档”。

把以下命令复制并粘贴到新建的文本文档中。

```txt
DEL /F /A /Q \\?\%1
RD /S /Q \\?\%1
```

点击“文件”，选择“另存为”，把文件命名为`files_del.bat`

 把需要删除的文件或文件夹拖拽至`files_del.bat`文件上，然后放开手，便可成功删除该文件或文件夹。

#### 通过安全模式删除

在安全模式下，许多Windows程序处于未运行状态，因此可以更轻松地删除文件和文件夹。

1. 同时按下键盘上的“Windows图标”+“I”键以打开Windows设置。然后，点击“更新和安全”。
2. 单击左侧的“恢复”，然后点击“立即重新启动”。
3. 接着，依次选择“疑难解答”>“高级选项”>“启动设置”，最后点击“重启”。
4. 重启后，请按数字4或F4以启用安全模式。成功进入安全模式后，删除目标文件、文件夹即可。

#### 其它法子

借助免费的第三方软件：文件解锁工具

考虑病毒

### VS Code

#### 通用

- `Ctrl+Shift+P, F1`  打开命令面板
- `Ctrl+P`  快速打开文件
- `Ctrl+Shift+N`  打开新窗口/实例
- `Ctrl+Shift+W`  关闭窗口/实例

#### 基础编辑

- `Ctrl+X`  剪切当前行
-`Ctrl+C`  复制当前行
- `Alt+ ↑ / ↓` 向上/向下移动当前行
- `Shift+Alt + ↓ / ↑`  向上/向下复制当前行
- `Ctrl+Shift+K`  删除当前行
- `Ctrl+Enter`  在当前行以下插入
- `Ctrl+Shift+Enter`  在当前行以上插入
- `Ctrl+Shift+\` 跳转到匹配的括号
- `Ctrl+] / [` 缩进/取消缩进
- `Home`  转到行首
- `End`  转到行尾
- `Ctrl+Home`  转到页首
- `Ctrl+End`  转到页尾
- `Ctrl+↑ / ↓`  向上/向下滚动
- `Alt+PgUp / PgDown`  向上/向下翻页
- `Ctrl+Shift+[`  折叠当前代码块
- `Ctrl+Shift+]`  展开当前代码块
- `Ctrl+K Ctrl+[`  折叠所有子代码块
- `Ctrl+K Ctrl+]`  展开所有子代码块
- `Ctrl+K Ctrl+0`  折叠所有代码块
- `Ctrl+K Ctrl+J`  展开所有代码块
- `Ctrl+K Ctrl+C`  添加行注释
- `Ctrl+K Ctrl+U`  删除行注释
- `Ctrl+/` 添加/删除行注释
-`Shift+Alt+A`  添加/删除块注释
- `Alt+Z`  自动换行

#### 导航

- `Ctrl+T`  显示所有符号
- `Ctrl+G`  跳转到行
- `Ctrl+P`  跳转到文件
- `Ctrl+Shift+O`  跳转到符号
- `Ctrl+Shift+M`  显示问题面板
- `F8`  跳转到下一个问题或警告
- `Shift+F8`  跳转到前一个问题或警告
- `Ctrl+Shift+Tab`  显示编辑器文件历史
- `Alt+ ← / →`  向后/向前查看文件
-`Ctrl+M`  开启/关闭 Tab 移动焦点

#### 搜索和替换

- `Ctrl+F`  查找
- `Ctrl+H`  替换
- `F3 / Shift+F3` 查找下一个/前一个
- `Alt+Ente`r  选择所有匹配项
- `Ctrl+D` 选择下一个匹配项
- `Ctrl+K Ctrl+D`  跳过当前选择项
- `Alt+C / R / W`  切换大小写敏感/正则表达式/全词

#### 多光标与选择

- `Alt+Click`  插入光标
- `Ctrl+Alt+ ↑ / ↓`  向上/向下插入光标
-` Ctrl+U ` 撤销上一个光标
- `Shift+Alt+I` 在选中行的行尾插入光标
- `Ctrl+I`  选择当前行
- `Ctrl+Shift+L`  选择当前选中项的所有匹配项
- `Ctrl+F2`  选择当前单词的所有匹配项
- `Shift+Alt+→`  扩展选择
- `Shift+Alt+←` 缩小选择
- `Shift+Alt + (drag mouse)`  列（框）选择
- `Ctrl+Shift+Alt + (arrow key)` 列（框）选择
- `Ctrl+Shift+Alt +PgUp/PgDown`  向上页/下页列（框）选择

#### 富语言编辑

- `Ctrl+Space` 打开建议
- `Ctrl+Shift+Space`  打开参数提示
- `Tab  Emmet` 展开缩写
- `Shift+Alt+F`  格式化文档
- `Ctrl+K Ctrl+F`格式化选择区域
- `F12` 跳转到定义
- `Alt+F12` 打开窗口显示定义
- `Ctrl+K F12` 打开侧边栏显示定义
- `Ctrl+.` 快速解决
- `Shift+F12`  显示引用
- `F2`  重命名符号
- `Ctrl+Shift+ . / ,`  替换为下一个/上一个值
- `Ctrl+K Ctrl+X`  删除行尾空格
- `Ctrl+K M`  更改文本语言

#### 编辑管理

- `Ctrl+F4, Ctrl+W`  关闭编辑的文件
- `Ctrl+K F`  关闭文件夹
- `Ctrl+\`  拆分编辑器窗口
- `Ctrl+ 1 / 2 / 3`  切换到第一、第二或第三个窗口
- `Ctrl+K Ctrl+ ←/→` 切换到上一个/下一个窗口
- `Ctrl+Shift+PgUp /PgDown`  向左/向右移动编辑的文件
- `Ctrl+K ← / →` 向左/向右移动编辑窗口

### regedit更改Window时间显示秒

1. 在键盘上按下Win+R组合键打开运行，输入regedit
2. 在打开的注册表编辑器窗口中，依次展开到HKEY_CURRENT_USER\SOFTWARE\Microsoft\Windows\CurrentVersion\Explorer\Advanced
3. 在右侧新建一个DWORD(32位)值，并命名为ShowSecondsInSystemClock，双击打开将数值数据修改为1，确定保存
4. 重启文件资源管理器，之后就可以看到时间显示到秒了。

### idea内存管理

- `-Xms512m`主要设置idea开始的内存大小
- `-Xmx2048m`设置idea最大的内存
- `-XX:ReservedCodeCacheSize=480m`设置代码内存容量

### 获取WIFI密码使用方法

1. 以管理员权限运行CMD

2. 输入命令：

```txt
for /f "skip=9 tokens=1,2 delims=:" %i in ('netsh wlan show profiles') do @echo %j | findstr -i -v echo | netsh wlan show profiles %j key=clear
```
