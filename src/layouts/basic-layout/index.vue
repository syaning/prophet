<template>
  <Layout :class="prefixCls">
    <Sider
      :class="siderClasses"
      :width="256"
      :collapsed-width="80"
      collapsible
      hide-trigger
      v-model="collapsed">
      <div :class="logoClasses">
        <img src="@/assets/logo.png">
        <h1 v-show="!collapsed">Prophet</h1>
      </div>
      <menubar :collapsed="collapsed"></menubar>
    </Sider>

    <Layout>
      <Header :class="headerClasses">
        <span :class="siderTriggerClasses" @click="toggleCollapsed">
          <Icon type="md-menu" size="24" />
        </span>
        <div style="float: right;">
          <select-lang></select-lang>
        </div>
      </Header>

      <Content :class="contentClasses">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </Content>

      <global-footer></global-footer>
    </Layout>
  </Layout>
</template>

<script>
import Menubar from '@/components/menubar'
import SelectLang from '@/components/select-lang'
import GlobalFooter from '@/components/global-footer'

const prefixCls = 'prophet-basic-layout'

export default {
  components: {
    Menubar,
    SelectLang,
    GlobalFooter
  },

  data() {
    return {
      prefixCls,
      collapsed: false
    }
  },

  computed: {
    siderClasses() {
      return `${prefixCls}-sider`
    },

    logoClasses() {
      return `${prefixCls}-logo`
    },

    headerClasses() {
      return `${prefixCls}-header`
    },

    contentClasses() {
      return `${prefixCls}-content`
    },

    siderTriggerClasses() {
      return `${prefixCls}-sider-trigger`
    }
  },

  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed
    }
  }
}
</script>

<style lang="less">
.prophet-basic-layout {
  &-sider {
    min-height: 100vh;
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    z-index: 1000;
  }

  &-logo {
    height: 64px;
    line-height: 64px;
    background: #002140;
    padding: 0 24px;

    img {
      display: inline-block;
      vertical-align: middle;
      width: 32px;
      height: 32px;
    }

    h1 {
      display: inline-block;
      vertical-align: middle;
      margin: 0 0 0 12px;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
    }
  }

  &-header {
    padding: 0 20px 0 0;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }

  &-sider-trigger {
    display: inline-block;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
      background: rgba(0,0,0,.025);
    }
  }

  &-content {
    margin: 24px;
  }
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>
