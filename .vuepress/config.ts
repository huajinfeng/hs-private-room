import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "H&H's Home",//导航栏标题
  dest: './dist',//生成的dist文件放在根目录  
  // base: '/hs-private-room/',// 设置站点根路径
  base: '/',
  head: [['link', { rel: 'icon', href: 'headlogo.ico' }]],//标签页logo
  description: "Just playing around",
  theme: recoTheme({
    style: "@vuepress-reco/style-default",//主题
    logo: "/logo.png",//网站logo
    author: "H&H",//作者
    authorAvatar: "/head.png",//作者头像
    docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    docsBranch: "main",
    docsDir: "example",
    lastUpdatedText: "",
    //看板娘，2.x暂未支持
    plugins: [
      ['@vuepress/back-to-top'],
      ['@vuepress/last-updated'],
      // ['@vuepress-reco/vuepress-plugin-kan-ban-niang',{
      //   theme: ["blackCat"],
      //   clean: false,
      //   info: 'https://github.com/mengqiuleo',
      //   messages: {
      //     welcome: '',
      //     home: '心里的花，我想要带你回家',
      //     theme: '好吧，希望你能喜欢我的其他小伙伴。',
      //     close: '再见哦'
      //   }
      // }],
    ],
    // series 为原 sidebar
    //左侧边栏
    series: {
      "/docs/theme-reco/": [//侧边栏父文件夹
        {
          text: "module one",//侧边栏标题
          children: ["home", "theme"],//md文档名
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
      "/docs/Guide/": [//指南侧边栏---父文件夹
        {
          text: "使用指南",//侧边栏标题
          children: ["guide",],//md文档名
        },
      ],
      "/docs/Compontents/": [//前端组件侧边栏---父文件夹
        {
          text: "Vue组件",//侧边栏标题
          children: ["test","Evaluation","GradientButton","CodeBackground",],//md文档名
        },
        {
          text: "纯CSS组件",
          children: ["BlogHome","Title-effect","TitleAnimation", "MergeText","Check-Box", "Loading-CodeStyle","Loading-LoveStyle",
          "Loading-LiquidStyle","RingTrack","LikeAnimation","InputAnimation","RingMenu","MenuAnimation","Round3D","ChargingAnimation",
          "ChargingAnimation2",],//md文档名
        },
      ],
      "/docs/Basics/": [//基础侧边栏---父文件夹
      {
        text: "前端基础",//侧边栏标题
        children: ["WebBasics",],//md文档名
      },
    ],
    "/docs/JAVAStudyNote": [
      {
        text: "JAVA基础",//侧边栏标题
        children: ["1.Java概述.md","2.变量与运算符.md",],//md文档名
      }
    ],
    "/docs/JavaScript/": [//基础侧边栏---父文件夹
      {
        text: "JS基础",//侧边栏标题
        children: ["v-for.md",],//md文档名
      },
    ],
    "/docs/Python/":[//Python笔记
      {
        text:"Python基础",//侧边栏标题
        children:["1、变量,内置函数.md","2、运算符.md","3、字符串.md","4、列表.md","5、元组.md","6、集合.md","7、字典.md",
                  '8、条件语句.md','9、循环.md','10、函数.md','11、模块.md','12、列表推导式.md','13、高阶函数s.md',
                  '14、Python错误类型.md','15、Python日期时间.md','16、异常处理.md','17、正则表达式.md','18、文件处理.md',
                  '19、Python包管理器.md','20、类和对象.md','21、网页抓取.md']//md文档名
      }
    ]
    },
    //导航栏标签
    navbar: [
      { text: "Home", link: "/" },
      { text: "前端组件", link: "/docs/Compontents/BlogHome.md" },//可以添加一个首页md文档作为link路径
      { text: "前端笔记",
      // link: "/tags/tag1/1/"
        children: [
          { text: "基础", link: "/docs/Basics/WebBasics.md" },
          { text: "HTML", link: "/docs/HTML/" },
          { text: "JavaScript", link: "/docs/JavaScript/v-for.md" },
          { text: "CSS", link: "/docs/CSS/" },
        ] 
      },
      {
        text: "Python笔记",
        link: "/docs/Python/1、变量,内置函数.md"
      },
      { text: "JAVA笔记", link: "/docs/JAVAStudyNote/1.Java概述.md" },
    ],
    //弹窗公告
    // bulletin: {
    //   body: [
    //     {
    //       type: "text",
    //       content: `🎉🎉🎉 reco 主题 2.x 已经接近 Beta 版本，在发布 Latest 版本之前不会再有大的更新，大家可以尽情尝鲜了，并且希望大家在 QQ 群和 GitHub 踊跃反馈使用体验，我会在第一时间响应。`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "QQ 群",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li>QQ群1：1037296104</li>
    //         <li>QQ群2：1061561395</li>
    //         <li>QQ群3：962687802</li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "title",
    //       content: "GitHub",
    //     },
    //     {
    //       type: "text",
    //       content: `
    //       <ul>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/issues">Issues<a/></li>
    //         <li><a href="https://github.com/vuepress-reco/vuepress-theme-reco-next/discussions/1">Discussions<a/></li>
    //       </ul>`,
    //       style: "font-size: 12px;",
    //     },
    //     {
    //       type: "hr",
    //     },
    //     {
    //       type: "buttongroup",
    //       children: [
    //         {
    //           text: "打赏",
    //           link: "/docs/others/donate.html",
    //         },
    //       ],
    //     },
    //   ],
    // },
    // valineConfig 配置与 1.x 一致
    // valineConfig: {
    //   appId: 'xxx',
    //   appKey: 'xxx',
    //   placeholder: '填写邮箱可以收到回复提醒哦！',
    //   verify: true, // 验证码服务
    //   // notify: true,
    //   recordIP: true,
    //   // hideComments: true // 隐藏评论
    // },
  }),
  // debug: true,
});
