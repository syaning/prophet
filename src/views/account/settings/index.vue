<template>
  <Card dis-hover :bordered="false">
    <div :class="prefixCls">
      <Menu :class="menuClasses" :active-name="activeName">
        <router-link
          v-for="menu in menus"
          :key="menu.name"
          :to="{ name: menu.name }">
          <MenuItem :name="menu.name">
            {{ $t(menu.meta.title) }}
          </MenuItem>
        </router-link>
      </Menu>
      <div :class="infoClasses">
        <h3>{{ $t($route.meta.title) }}</h3>
        <router-view></router-view>
      </div>
    </div>
  </Card>
</template>

<script>
import accountRoutes from '@/router/routes/account'

const prefixCls = 'prophet-account-settings'

export default {
  data() {
    return {
      prefixCls
    }
  },

  computed: {
    menuClasses() {
      return `${prefixCls}-menu`
    },

    infoClasses() {
      return `${prefixCls}-info`
    },

    menus() {
      const route = accountRoutes.children.find(r => r.name === 'account-settings')
      return route.children
    },

    activeName() {
      return this.$route.name
    }
  }
}
</script>

<style lang="less">
.prophet-account-settings {
  display: flex;
  width: 100%;
  margin-left: -16px;

  &-menu {
    .ivu-menu-item {
      color: rgba(0,0,0,.65);
    }
  }

  &-info {
    flex-grow: 1;
    padding: 8px 40px;

    h3 {
      font-size: 20px;
      margin-bottom: 12px;
    }
  }
}
</style>
