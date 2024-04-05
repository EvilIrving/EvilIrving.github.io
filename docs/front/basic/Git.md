1. 美化 log 信息

`git config --global alias.lg "log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --date=relative"`

2. 迁移仓库

   1. 使用 `git clone --bare` 命令克隆存储库的原始副本。
   2. 通过 `cd` 进入该副本。
   3. 运行 `git push --mirror` 命令将所有分支和标签推送到新的 Git 仓库中。
   4. 返回父级目录并删除临时副本。
   5. 最后，使用 `git remote set-url` 更新工作副本的远程 URL。

如

```bash
git clone --bare git@yourserver.com:project.git
cd project.git
git push --mirror git@github.com:ariejan/project.git
cd .. && rm -rf project.git

git remote set-url origin git@github.com:username/repo.git // 更改
git remote add origin git@github.com:username/repo.git // 新增
```

3. 移动最新提交到单独分支

   1. 首先，确保当前处于要修改的最后一个 Commit 上。
   2. 然后，创建一个新分支，包含这些需要被移动的 Commit。
   3. 再次返回到 master 分支，使用 git reset 命令将 master 分支重置到应该的状态。

```bash
现在:
A - B - (C) - D - E - F // main

你希望:
A - B - (C)             // main
           \ D - E  F   // feature

git branch my_feature_branch // on main
git reset --hard HEAD~3
```
