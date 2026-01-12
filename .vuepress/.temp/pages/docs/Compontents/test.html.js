export const data = JSON.parse("{\"key\":\"v-db305b2a\",\"path\":\"/docs/Compontents/test.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"createdTime\":null,\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"docs/Compontents/test.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
