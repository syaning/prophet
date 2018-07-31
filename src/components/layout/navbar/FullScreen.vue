<template>
  <Icon class="full-screen-icon" :type="fullScreen ? 'md-contract' : 'md-expand'" @click="toggleFullScreen"></Icon>
</template>

<script>
import screenfull from 'screenfull'

export default {
  data() {
    return {
      fullScreen: false
    }
  },

  methods: {
    toggleFullScreen() {
      this.fullScreen = !this.fullScreen
      screenfull.toggle()
    }
  }
}
</script>

<style lang="scss">
.full-screen-icon {
  cursor: pointer;
  color: #80848f;
  font-size: 1rem;

  &:hover {
    color: #2d8cf0;
  }
}
</style>
