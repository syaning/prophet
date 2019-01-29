<template>
  <Footer class="prophet-global-footer">
    <span style="vertical-align: middle;">
      Copyright &copy; 2018-{{ year }} Alex Sun
    </span>
    <a href="https://github.com/syaning/prophet" target="_blank"
      style="color: #515a6e; margin-left: 5px;">
      <Icon type="logo-github" />
    </a>
  </Footer>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="less">
.prophet-global-footer {
  text-align: center;
}
</style>
