<template>
  <Layout>
    <Sider style="min-height: 100vh;">
      <sidebar></sidebar>
    </Sider>
    <Layout>
        <Header class="header">
          Hello
          <navbar></navbar>
        </Header>
        <Content class="content">
          <transition name="fade-transform" mode="out-in">
            <router-view></router-view>
          </transition>
        </Content>
    </Layout>
</Layout>
</template>

<script>
import Navbar from './navbar'
import Sidebar from './sidebar'

export default {
  components: { Navbar, Sidebar }
}
</script>

<style>
.header {
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
}

.content {
  margin: 1.5rem;
}

.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
