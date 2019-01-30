<template>
  <Dropdown :class="prefixCls" placement="bottom-end" @on-click="handle">
    <a href="javascript:void(0)">
      <Avatar :class="avatarClasses" icon="ios-person" size="small" />
      <span :class="nameClasses">
        {{ username }}
      </span>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem name="account-center">
        <Icon type="ios-person-outline" />
        {{ $t('menu.accountCenter') }}
      </DropdownItem>
      <DropdownItem name="account-settings">
        <Icon type="ios-settings-outline" />
        {{ $t('menu.accountSettings') }}
      </DropdownItem>
      <DropdownItem name="logout" divided>
        <Icon type="ios-log-out" />
        {{ $t('menu.logout') }}
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const prefixCls = 'prophet-user-info'

export default {
  data() {
    return {
      prefixCls
    }
  },

  computed: {
    ...mapGetters(['username']),

    avatarClasses() {
      return `${prefixCls}-avatar`
    },

    nameClasses() {
      return `${prefixCls}-name`
    }
  },

  methods: {
    ...mapActions(['logout']),

    handle(name) {
      if (name === 'logout') {
        this.logout().then(() => {
          this.$router.push({ name: 'login' })
        })
      } else {
        this.$router.push({ name })
      }
    }
  }
}
</script>

<style lang="less">
.prophet-user-info {
  padding: 0 8px;

  &-avatar {
    background: #5cadff;
  }

  &-name {
    color: #515a6e;
    margin-left: 8px;
  }
}
</style>
