<template>
  <main class="main">
    <div class="path">
      <img class="logo" src="../public/logo.png" />
      <div class="avatar">
        <span>路飞</span>
        <img src="../public/cartoonhead.jpg" />
      </div>
      <div class="avatar">
        <span>艾斯</span>
        <img src="../public/cartoonhead1.jpg" />
      </div>
      <div class="avatar">
        <span>萨博</span>
        <img src="../public/cartoonhead2.jpg" />
      </div>
      <div class="avatar">
        <span>索隆</span>
        <img src="../public/cartoonhead3.jpg" />
      </div>
      <div class="avatar">
        <span>山治</span>
        <img src="../public/cartoonhead4.jpg" />
      </div>
    </div>
  </main>
</template>
<script>
</script>
<style scoped>
main {
  width: 100%;
  height: 529px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.path {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  margin: 100px auto;
  position: relative;
  display: flex;
  border: 1px solid #b4a078;
}
.logo {
  width: 52px;
  margin: auto;
  background: #fff;
}
.avatar {
  width: 50px;
  position: absolute;
  top: 124px;
  left: 124px;
  animation: circular-smooth-spin 7.5s infinite linear;
  animation-play-state: running;
}
.avatar > span {
  font-weight: 500;
  position: absolute;
  white-space: nowrap;
  top: -50%;
  left: 50%;
  padding: 3px 12px;
  opacity: 0;
  transform: scale(0);
  transition: opacity, transform 0.8s;
  transform-origin: 0 bottom;
}
.avatar > img {
  width: inherit;
  border-radius: 50%;
  overflow: hidden;
}
.path:hover .avatar {
  animation-play-state: paused;
}

.path:hover .avatar > span {
  opacity: 1;
  transform: scale(1);
  transition: opacity, transform 0.8s;
}
.avatar:nth-of-type(2) {
  animation-delay: -1.5s;
}

.avatar:nth-of-type(3) {
  animation-delay: -3s;
}

.avatar:nth-of-type(4) {
  animation-delay: -4.5s;
}

.avatar:nth-of-type(5) {
  animation-delay: -6s;
}
@keyframes circular-smooth-spin {
  from {
    transform: rotate(0turn) translateY(-124px) rotate(1turn);
  }
  to {
    opacity: 1;
    transform: rotate(1turn) translateY(-124px) rotate(0turn);
  }
}
</style>