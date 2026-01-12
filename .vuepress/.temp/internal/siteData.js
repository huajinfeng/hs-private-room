export const siteData = JSON.parse("{\"base\":\"/hs-private-room/\",\"lang\":\"en-US\",\"title\":\"H&H's Home\",\"description\":\"Just playing around\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"headlogo.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
