<template>
  <Layout>
    <Sider class="prophet-sider" :width="256">
      <div class="prophet-logo">
        <img src="@/assets/logo.png">
        <h1>Prophet</h1>
      </div>
      <menubar></menubar>
    </Sider>

    <Layout>
      <Header class="prophet-header">header</Header>
      <Content class="prophet-content">
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </Content>
      <Footer class="prophet-footer">
        <span style="vertical-align: middle;">Copyright &copy; 2018-2019</span>
        <Icon type="logo-github" style="margin-left: 10px;" />
      </Footer>
    </Layout>
  </Layout>
</template>

<script>
import Menubar from './Menubar'

export default {
  components: { Menubar }
}
</script>

<style lang="less">
.prophet-sider {
  min-height: 100vh;
  background: #001529;
  box-shadow: 2px 0 6px rgba(0,21,41,.35);
}

.prophet-logo {
  height: 64px;
  line-height: 64px;
  background: #002140;
  padding-left: 24px;

  img {
    display: inline-block;
    vertical-align: middle;
    height: 36px;
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
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
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
