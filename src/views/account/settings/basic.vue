<template>
  <div :class="prefixCls">
    <div :class="infoClasses">info</div>

    <div :class="avatarClasses">avatar</div>
  </div>
</template>

<script>
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
      }
    }
  },

  computed: {
    infoClasses() {
      return `${prefixCls}-info`
    },

    avatarClasses() {
      return `${prefixCls}-avatar`
    }
  }
}
</script>
