<template>
  <Layout class="prophet-login">
    <Header class="header">
      <select-lang style="float: right;"></select-lang>
    </Header>

    <Content>
      <Form :model="user">
        <FormItem prop="user">
          <Input v-model="user.username" />
        </FormItem>
        <FormItem prop="password">
          <Input v-model="user.password" type="password" />
        </FormItem>
      </Form>
    </Content>

    <global-footer></global-footer>
  </Layout>
</template>

<script>
import GlobalFooter from '@/components/global-footer'
import SelectLang from '@/components/select-lang'

export default {
  components: {
    GlobalFooter,
    SelectLang
  },

  data() {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="less">
.prophet-login {
  height: 100vh;

  .header {
    background: #f5f7f9;
    padding: 0 20px;
  }
}
</style>
