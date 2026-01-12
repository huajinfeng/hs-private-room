import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("BlogHome", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/BlogHome.vue"))),
      app.component("ChargingAnimation", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/ChargingAnimation.vue"))),
      app.component("ChargingAnimation2", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/ChargingAnimation2.vue"))),
      app.component("CheckBox", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/CheckBox.vue"))),
      app.component("CodeBackground", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/CodeBackground.vue"))),
      app.component("Evaluation", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/Evaluation.vue"))),
      app.component("GradientButton", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/GradientButton.vue"))),
      app.component("InputAnimation", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/InputAnimation.vue"))),
      app.component("LikeAnimation", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/LikeAnimation.vue"))),
      app.component("LoadingCodeStyle", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/LoadingCodeStyle.vue"))),
      app.component("LoadingLiquidStyle", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/LoadingLiquidStyle.vue"))),
      app.component("LoadingLoveStyle", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/LoadingLoveStyle.vue"))),
      app.component("MenuAnimation", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/MenuAnimation.vue"))),
      app.component("MergeText", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/MergeText.vue"))),
      app.component("RingMenu", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/RingMenu.vue"))),
      app.component("RingTrack", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/RingTrack.vue"))),
      app.component("Round3D", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/Round3D.vue"))),
      app.component("test", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/test.vue"))),
      app.component("TitleAnimation", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/TitleAnimation.vue"))),
      app.component("TitleEffect", defineAsyncComponent(() => import("D:/vue/python/hs-private-room-main/hblog/.vuepress/vue-previews/TitleEffect.vue")))
  },
}
