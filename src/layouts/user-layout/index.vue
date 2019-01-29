<template>
  <Layout :class="prefixCls">
    <Header :class="headerClasses">
      <select-lang style="float: right;"></select-lang>
    </Header>

    <Content>
      <div :class="contentHeaderClasses">
        <img src="@/assets/logo.png" />
        <h1>Prophet</h1>
      </div>
      <router-view />
    </Content>

    <global-footer>
      <template slot="copyright">
        <span style="vertical-align: middle;">
          Copyright &copy; 2018-{{ year }} Alex Sun
        </span>
        <a href="https://github.com/syaning/prophet" target="_blank"
          style="color: #515a6e; margin-left: 5px;">
          <Icon type="logo-github" />
        </a>
      </template>
    </global-footer>
  </Layout>
</template>

<script>
import GlobalFooter from '@/components/global-footer'
import SelectLang from '@/components/select-lang'

const prefixCls = 'prophet-user-layout'

export default {
  components: {
    GlobalFooter,
    SelectLang
  },

  data() {
    return {
      prefixCls,
      year: new Date().getFullYear()
    }
  },

  computed: {
    headerClasses() {
      return `${prefixCls}-header`
    },

    contentHeaderClasses() {
      return `${prefixCls}-content-header`
    }
  }
}
</script>

<style lang="less">
.prophet-user-layout {
  min-height: 100vh;

  &-header {
    background: #f5f7f9;
    padding: 0 20px;
  }

  &-content-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;

    img {
      width: 44px;
      height: 44px;
    }

    h1 {
      display: inline-block;
      font-size: 32px;
      margin-left: 16px;
    }
  }
}
</style>
