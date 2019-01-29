<template>
  <Layout>
    <Sider
      class="prophet-sider"
      :width="256"
      collapsible
      :collapsed-width="80"
      hide-trigger
      v-model="collapsed">
      <div class="prophet-logo">
        <img src="@/assets/logo.png">
        <h1 v-show="!collapsed">Prophet</h1>
      </div>
      <menubar :collapsed="collapsed"></menubar>
    </Sider>

    <Layout>
      <Header class="prophet-header">
        <span class="prophet-menubar-trigger" @click="toggleCollapsed">
          <Icon type="md-menu" size="24" />
        </span>
        <div style="float: right;">
          <lang-select></lang-select>
        </div>
      </Header>
      <Content class="prophet-content">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </Content>
      <global-footer></global-footer>
    </Layout>
  </Layout>
</template>

<script>
import Menubar from './Menubar'
import LangSelect from '@/components/lang-select'
import GlobalFooter from '@/components/global-footer'

export default {
  components: {
    Menubar,
    LangSelect,
    GlobalFooter
  },

  data() {
    return {
      collapsed: false
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
.prophet-sider {
  min-height: 100vh;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
  z-index: 1000;
}

.prophet-logo {
  height: 64px;
  line-height: 64px;
  background: #002140;
  padding-left: 24px;

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

.prophet-header {
  padding: 0 20px 0 0;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

.prophet-menubar-trigger {
  display: inline-block;
  padding: 0 20px;
  cursor: pointer;

  &:hover {
    background: rgba(0,0,0,.025);
  }
}

.prophet-content {
  margin: 24px;
}

.prophet-footer {
  text-align: center;
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
