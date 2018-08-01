<template>
  <div class="page-404">
    <div style="font-style: italic; text-align: center; color: #fff;">
      <img src="@/assets/logo.png" style="width: 120px;" />
      <p>These violent delights,</p>
      <p>have violent ends.</p>
    </div>
    <div style="width: 300px; height: 200px;">
      <svg viewBox="0 0 300 200">
        <symbol id="s-text">
          <text text-anchor="middle" x="50%" y="50%" dy=".35em">
            404
          </text>
        </symbol>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
        <use xlink:href="#s-text" class="text"></use>
      </svg>
    </div>
  </div>
</template>

<style scoped>
.page-404 {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #212121;
}

svg {
  font-size: 10rem;
}

.text {
  fill: none;
  stroke-width: 3;
  stroke-linejoin: round;
  stroke-dasharray: 70 330;
  stroke-dashoffset: 0;
  -webkit-animation: stroke 6s infinite linear;
  animation: stroke 6s infinite linear;
}

.text:nth-child(5n + 1) {
  stroke: #F2385A;
  -webkit-animation-delay: -1.2s;
  animation-delay: -1.2s;
}

.text:nth-child(5n + 2) {
  stroke: #F5A503;
  -webkit-animation-delay: -2.4s;
  animation-delay: -2.4s;
}

.text:nth-child(5n + 3) {
  stroke: #E9F1DF;
  -webkit-animation-delay: -3.6s;
  animation-delay: -3.6s;
}

.text:nth-child(5n + 4) {
  stroke: #56D9CD;
  -webkit-animation-delay: -4.8s;
  animation-delay: -4.8s;
}

.text:nth-child(5n + 5) {
  stroke: #3AA1BF;
  -webkit-animation-delay: -6s;
  animation-delay: -6s;
}

@-webkit-keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}

@keyframes stroke {
  100% {
    stroke-dashoffset: -400;
  }
}
</style>
