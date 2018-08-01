<template>
  <div class="login-page">
    <img src="@/assets/logo.png" />
    <Card dis-hover :bordered="false" class="login-card">
      <Form :model="user">
        <FormItem prop="username">
          <Input type="text" v-model="user.username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="user.password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="login">Sign in</Button>
          <a href="#" @click.prevent style="float: right;">Forgot password?</a>
        </FormItem>
      </Form>
      <Tag color="green">Admin: amdin / admin</Tag>
      <Tag color="blue">User: user / user</Tag>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: 'admin',
        password: 'admin'
      }
    }
  },

  methods: {
    login() {
      this.$store.dispatch('login', this.user)
        .then(() => {
          const redirect = this.$route.query.redirect || '/'
          this.$router.push(redirect)
        })
        .catch(err => {
          this.$Message.error({ content: err.message })
        })
    }
  }
}
</script>

<style lang="scss">
.login-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #515a6e;

  img {
    width: 50px;
    height: 50px;
    margin-top: -100px;
  }
}

.login-card {
  width: 350px;
  padding-top: 1rem;
}
</style>
