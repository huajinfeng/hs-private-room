标题聚光灯效果

<TitleAnimation />

```vue
<template>
  <div>
    <span>helloworld</span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
* {
  /* 初始化 取消页面元素内外边距 */
  margin: 0;
  padding: 0;
}
div {
  background-color: #222;
  /* 弹性布局 水平、垂直居中 */
  display: flex;
  justify-content: center;
  align-items: center;
  /* 100%窗口高度 */
  height: 30vh;
}
span {
  color: #333;
  /* 转大写 */
  text-transform: uppercase;
  font-size: 32px;
  /* 相对定位 */
  position: relative;
}
span::after {
  content: "helloworld";
  /* 颜色为透明 */
  color: transparent;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    to right,
    #ff69b3,
    #fe0000,
    #ffa401,
    #ffff01,
    #008102,
    #40e1d2,
    #410098,
    #9400d4
  );
  /* 以文字的范围来裁剪背景图片 */
  background-clip: text;
  -webkit-background-clip: text;
  /* 将元素裁剪为一个圆形（100px表示圆的直径，0% 50%表示圆心的位置） */
  clip-path: circle(100px at 0% 50%);
  /* 执行动画（动画 时长 infinite表示无限次播放） */
  animation: light 5s infinite;
}

/* 定义动画 改变圆心的位置 */
@keyframes light {
  0% {
    clip-path: circle(100px at 0% 50%);
  }
  50% {
    clip-path: circle(100px at 100% 50%);
  }
  100% {
    clip-path: circle(100px at 0% 50%);
  }
}
</style>
```

