<template>
  <div class="prophet-register">
    <h3>{{ $t('register.title') }}</h3>
    <Form :model="user">
      <FormItem prop="email">
        <Input v-model="user.email"
          :placeholder="$t('register.email.placeholder')" />
      </FormItem>
      <FormItem prop="password">
        <Input v-model="user.password" type="password"
          :placeholder="$t('register.password.placeholder')" />
      </FormItem>
      <FormItem prop="confirmPass">
        <Input v-model="user.confirmPass" type="password"
          :placeholder="$t('register.confirmPass.placeholder')" />
      </FormItem>
      <FormItem prop="phone">
        <Input v-model="user.phone" :placeholder="$t('register.phone.placeholder')">
          <Select v-model="user.area" slot="prepend" style="width: 75px;">
            <Option v-for="area in areas" :key="area" :value="area">
              {{ area }}
            </Option>
          </Select>
        </Input>
      </FormItem>
      <FormItem prop="code">
        <Row :gutter="8">
          <Col :span="16">
            <Input v-model="user.code" :placeholder="$t('register.code.placeholder')" />
          </Col>
          <Col :span="8">
            <Button long @click="getCode">
              {{ $t('register.getCode') }}
            </Button>
          </Col>
        </Row>
      </FormItem>
      <FormItem>
        <Row :gutter="8">
          <Col :span="12">
            <Button long type="primary">
              {{ $t('register.register') }}
            </Button>
          </Col>
          <Col :span="12" style="text-align: right;">
            <router-link :to="{ name: 'login' }">
              {{ $t('register.login') }}
            </router-link>
          </Col>
        </Row>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
        confirmPass: '',
        area: '+86',
        phone: '',
        code: ''
      },
      areas: ['+86']
    }
  },

  computed: {
    rules() {
      return {}
    }
  },

  methods: {
    getCode() {
      // ...
    }
  }
}
</script>

<style lang="less">
.prophet-register {
  width: 360px;
  margin: 0 auto;

  h3 {
    font-size: 16px;
    margin-bottom: 20px;
    color: rgba(0,0,0,.85);
  }
}
</style>
