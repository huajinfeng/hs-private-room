export const themeData = JSON.parse("{\"style\":\"@vuepress-reco/style-default\",\"logo\":\"/logo.png\",\"author\":\"H&H\",\"authorAvatar\":\"/head.png\",\"docsRepo\":\"https://github.com/vuepress-reco/vuepress-theme-reco-next\",\"docsBranch\":\"main\",\"docsDir\":\"example\",\"lastUpdatedText\":\"\",\"plugins\":[[\"@vuepress/back-to-top\"],[\"@vuepress/last-updated\"],[\"@vuepress-reco/vuepress-plugin-kan-ban-niang\",{\"theme\":[\"blackCat\"],\"clean\":false,\"info\":\"https://github.com/mengqiuleo\",\"messages\":{\"welcome\":\"\",\"home\":\"心里的花，我想要带你回家\",\"theme\":\"好吧，希望你能喜欢我的其他小伙伴。\",\"close\":\"再见哦\"}}]],\"series\":{\"/docs/theme-reco/\":[{\"text\":\"module one\",\"children\":[\"home\",\"theme\"]},{\"text\":\"module two\",\"children\":[\"api\",\"plugin\"]}],\"/docs/Guide/\":[{\"text\":\"使用指南\",\"children\":[\"guide\"]}],\"/docs/Compontents/\":[{\"text\":\"Vue组件\",\"children\":[\"test\",\"Evaluation\",\"GradientButton\",\"CodeBackground\"]},{\"text\":\"纯CSS组件\",\"children\":[\"BlogHome\",\"Title-effect\",\"TitleAnimation\",\"MergeText\",\"Check-Box\",\"Loading-CodeStyle\",\"Loading-LoveStyle\",\"Loading-LiquidStyle\",\"RingTrack\",\"LikeAnimation\",\"InputAnimation\",\"RingMenu\",\"MenuAnimation\",\"Round3D\",\"ChargingAnimation\",\"ChargingAnimation2\"]}],\"/docs/Basics/\":[{\"text\":\"前端基础\",\"children\":[\"WebBasics\"]}],\"/docs/JAVAStudyNote\":[{\"text\":\"JAVA基础\",\"children\":[\"1.Java概述.md\",\"2.变量与运算符.md\"]}],\"/docs/JavaScript/\":[{\"text\":\"JS基础\",\"children\":[\"v-for.md\"]}],\"/docs/Python/\":[{\"text\":\"Python基础\",\"children\":[\"1、变量,内置函数.md\",\"2、运算符.md\",\"3、字符串.md\",\"4、列表.md\"]}]},\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"前端组件\",\"link\":\"/docs/Compontents/BlogHome.md\"},{\"text\":\"前端学习笔记\",\"children\":[{\"text\":\"基础\",\"link\":\"/docs/Basics/WebBasics.md\"},{\"text\":\"HTML\",\"link\":\"/docs/HTML/\"},{\"text\":\"JavaScript\",\"link\":\"/docs/JavaScript/v-for.md\"},{\"text\":\"CSS\",\"link\":\"/docs/CSS/\"}]},{\"text\":\"Python学习\",\"link\":\"/docs/Python/1、变量,内置函数.md\"},{\"text\":\"JAVA学习笔记\",\"link\":\"/docs/JAVAStudyNote/1.Java概述.md\"}]}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
