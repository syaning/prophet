<template>
  <div class="prophet-login">
    <Tabs v-model="mode" :animated="false">
      <TabPane :label="$t('login.withCredentials')" name="credentials">
        <Form ref="credentials" :model="user" :rules="userRules">
          <FormItem prop="username">
            <Input prefix="ios-contact-outline" v-model="user.username"
              :placeholder="$t('login.username.placeholder')" />
          </FormItem>
          <FormItem prop="password">
            <Input prefix="ios-lock-outline" v-model="user.password" type="password"
              :placeholder="$t('login.password.placeholder')" />
          </FormItem>
        </Form>
      </TabPane>

      <TabPane :label="$t('login.withPhone')" name="phone">
        <Form ref="phone" :model="phone" :rules="phoneRules">
          <FormItem prop="number">
            <Input prefix="ios-phone-portrait" v-model="phone.number"
              :placeholder="$t('login.phoneNumber.placeholder')" />
          </FormItem>
          <FormItem prop="code">
            <Row :gutter="8">
              <Col :span="16">
                <Input prefix="ios-mail-outline" v-model="phone.code"
                  :placeholder="$t('login.verificationCode.placeholder')" />
              </Col>
              <Col :span="8">
                <Button long>{{ $t('login.getCaptcha') }}</Button>
              </Col>
            </Row>
          </FormItem>
        </Form>
      </TabPane>
    </Tabs>

    <div>
      <Checkbox v-model="remember">
        {{ $t('login.remember') }}
       </Checkbox>
      <a href="" style="float: right;">
        {{ $t('login.forgotPass') }}
      </a>
      <Button long type="primary" @click="onLogin" style="margin-top: 24px;">
        {{ $t('login.login') }}
      </Button>
    </div>
    <div class="prophet-login-extra">
      <span>{{ $t('login.signInWith') }}</span>
      <Icon type="logo-github" />
      <Icon type="logo-facebook" />
      <Icon type="logo-twitter" />
      <router-link :to="{ name: 'register' }" style="float: right;">
        {{ $t('login.signUp') }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      mode: 'credentials',
      user: {
        username: '',
        password: ''
      },
      phone: {
        number: '',
        code: ''
      },
      remember: true
    }
  },

  computed: {
    userRules() {
      return {
        username: [{ required: true, message: this.$t('login.username.message') }],
        password: [{ required: true, message: this.$t('login.password.message') }]
      }
    },

    phoneRules() {
      return {
        number: [{ required: true, message: this.$t('login.phoneNumber.message') }],
        code: [{ required: true, message: this.$t('login.verificationCode.message') }]
      }
    }
  },

  methods: {
    ...mapActions(['login']),

    getCaptcha() {
      // ...
    },

    onLogin() {
      this.$refs[this.mode].validate(valid => {
        if (valid) {
          this.login(this.user).then(res => {
            const redirect = this.$route.query.redirect || '/'
            this.$router.push(redirect)
          }).catch(() => {
            this.$Message.error(this.$t('login.loginFailed'))
          })
        }
      })
    }
  }
}
</script>

<style lang="less">
.prophet-login {
  width: 360px;
  padding: 0 5px;
  margin: 0 auto;

  .ivu-tabs-bar {
    border-bottom: none;
    margin-bottom: 24px;
  }

  .ivu-tabs-nav-scroll {
    display: flex;
    justify-content: center;
  }

  .ivu-tabs-tab:last-child {
    margin-right: 0;
  }

  &-extra {
    margin-top: 24px;

    i {
      font-size: 16px;
      margin-left: 8px;
      color: rgba(0,0,0,.2);
      cursor: pointer;

      &:hover {
        color: #2d8cf0;
      }
    }
  }
}
</style>
