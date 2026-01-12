<template>
  <div>
    <H3 class="name">Happy Birthday </H3>
    <canvas class="confetti" id="canvas" ref="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      canvas: null,
      ctx: null,
      cx: null,
      cy: null,
      confetti: [],
      confettiCount: 300,
      gravity: 0.5,
      terminalVelocity: 5,
      drag: 0.075,
      colors: [
        { front: "red", back: "darkred" },
        { front: "green", back: "darkgreen" },
        { front: "blue", back: "darkblue" },
        { front: "yellow", back: "darkyellow" },
        { front: "orange", back: "darkorange" },
        { front: "pink", back: "darkpink" },
        { front: "purple", back: "darkpurple" },
        { front: "turquoise", back: "darkturquoise" },
      ],
    };
  },
  mounted() {},
};
</script>

<style scoped>
.confetti {
  max-width: 100%;
  display: block;
  margin: 0 auto;
  user-select: none;
}

body {
  cursor: pointer;
}
.name {
  font-weight: 900;
  text-transform: uppercase;
  padding: 36px;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  top: 37%;
  color: rebeccapurple;
  font-family: "Righteous", cursive;
  font-size: 93px;
  letter-spacing: 10px;
  text-shadow: 2px 4px 11px rgb(0 0 0 / 28%);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: white;
}
</style>