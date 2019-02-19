<template>
  <div :class="prefixCls">
    <div :class="infoClasses">
      <Form :model="user">
        <FormItem label="Email">
          <Input v-model="user.email" />
        </FormItem>
        <FormItem label="Nickname">
          <Input v-model="user.nickname" />
        </FormItem>
        <FormItem label="Personal Profile">
          <Input type="textarea" :rows="4" v-model="user.description" />
        </FormItem>
        <FormItem label="Country/Region">
          <Select v-model="user.country">
            <Option v-for="country in countries" :key="country.value" :value="country.value">
              {{ country.name }}
            </Option>
          </Select>
        </FormItem>
      </Form>
    </div>

    <div :class="avatarClasses">
      <div>Avatar</div>
    </div>
  </div>
</template>

<script>
import api from '@/api'

const prefixCls = 'prophet-account-basic'

export default {
  data() {
    return {
      prefixCls,
      user: {
        email: '',
        nickname: '',
        description: '',
        country: '',
        city: '',
        address: '',
        phone: ''
      },
      countries: [
        { name: '中国', value: 'china' }
      ]
    }
  },

  computed: {
    infoClasses() {
      return `${prefixCls}-info`
    },

    avatarClasses() {
      return `${prefixCls}-avatar`
    }
  },

  created() {
    this.load()
  },

  methods: {
    load() {
      api.user.profile().then(res => {
        this.user = res.data
      })
    }
  }
}
</script>

<style lang="less">
.prophet-account-basic {
  display: flex;

  &-info {
    min-width: 224px;
    max-width: 448px;
  }

  &-avatar {
    flex: 1 1;
    margin-left: 104px;
  }
}
</style>
