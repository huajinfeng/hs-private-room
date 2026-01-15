---
title: Git 子文件夹与独立分支管理
date: 2026/1/13
tags:
 - git
categories:
 - coding #这里才是网页显示的文件夹
---

实现github在 main 分支进行源码开发，并将编译生成的 dist 文件夹自动同步到独立的 dist 分支。
删除了远程的 dist 分支，现在我们直接运行以下命令。如果没有dist分支，它会自动在远程创建一个新的 dist 分支，并将本地 dist 文件夹的内容放进去。
```bash
git subtree push --prefix dist origin dist
```
![githubPages Set](../../blogImages/githubPagesSet.png)
