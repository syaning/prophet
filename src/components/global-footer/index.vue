<template>
  <Footer :class="prefixCls">
    <span class="copyright">Copyright &copy; 2018-{{ year }}. Alex Sun</span>
    <a href="https://github.com/syaning/prophet" target="_blank">
      <Icon type="logo-github" />
    </a>
  </Footer>
</template>

<script>
export default {
  data() {
    return {
      prefixCls: 'prophet-global-footer',
      year: new Date().getFullYear()
    }
  }
}
</script>

<style lang="less">
.prophet-global-footer {
  text-align: center;

  .copyright {
    vertical-align: middle;
  }

  a {
    margin-left: 10px;
    color: #515a6e;
  }
}
</style>
