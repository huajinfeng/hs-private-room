---
home: true
modules:
  - BannerBrand
  - Blog
  - MdContent
  - Footer
bannerBrand:
  bgImage: '/bg.svg' #背景
  title: H&H's Home
  description: 开源的组件&学习笔记。
  tagline: 使用VuePress-theme-reco 2.0作为博客模板，记录一些常用or酷炫的组件，学习笔记。
  buttons:
    - { text: Guide(使用指南), link: '/docs/Guide/guide' }
    - { text: Default Style, link: '/docs/style-default-api/introduce', type: 'plain' }
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/huajinfeng' }
blog:
  socialLinks:
    - { icon: 'LogoGithub', link: 'https://github.com/huajinfeng' }
isShowTitleInHome: true
actionText: About
actionLink: /views/other/about
---

## 文档结构

<!-- 代码块组件 -->
```bash
------.vuepress
      --.cache
      --.temp
      --public //图片
      --vue-press //放组件，自动注册
      --config.ts //默认组件配置
------blogs //放博客相关
------docs  //放文档相关
------node_modules
------.gitigonre
------package-lock.json
------package.json
------README.md //首页显示
------yarn.lock
```


## 快速开始

**npx**
<!-- 代码块组件 -->
```bash
# 初始化，并选择 2.x
npx @vuepress-reco/theme-cli init
```

**npm**

```bash
# 初始化，并选择 2.x
npm install @vuepress-reco/theme-cli@1.0.7 -g
theme-cli init
```

**yarn**

```bash
# 初始化，并选择 2.x
yarn global add @vuepress-reco/theme-cli@1.0.7
theme-cli init
```

**部署**

```bash
# /.vuepress/config.ts
export default defineUserConfig({
  title: "H&H's Home",//导航栏标题
  dest: './dist',//生成的dist文件放在根目录  
  base: '/hs-private-room/',// 设置站点根路径
})
gitee
```
