<template>
  <Footer class="prophet-global-footer">
    <slot name="copyright">
      <span v-if="copyright">{{ copyright }}</span>
    </slot>
  </Footer>
</template>

<script>
export default {
  props: {
    copyright: {
      type: String
    }
  }
}
</script>

<style lang="less">
.prophet-global-footer {
  text-align: center;
}
</style>
