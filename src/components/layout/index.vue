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
          <router-view></router-view>
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
</style>
