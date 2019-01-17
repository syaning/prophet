<template>
  <Menu
    class="prophet-menubar"
    theme="dark"
    width="auto"
    accordion
    :active-name="activeName"
    :open-names="openNames">

    <Submenu v-for="menu in menus" :key="menu.name" :name="menu.name">
      <template slot="title">
        <Icon :type="menu.meta.icon" />
        {{ $t(menu.meta.title) }}
      </template>
      <router-link
        v-for="item in menu.children"
        :key="item.name"
        :to="{name: item.name}">
        <MenuItem :name="item.name">
          {{ $t(item.meta.title) }}
        </MenuItem>
      </router-link>
    </Submenu>
  </Menu>
</template>

<script>
import { menus } from '@/router'

export default {
  data() {
    return {
      menus
    }
  },

  computed: {
    menuNames() {
      return this.menus.map(menu => menu.name)
    },

    menuItemNames() {
      return this.menus.reduce((ret, menu) => {
        return ret.concat(menu.children.map(item => item.name))
      }, [])
    },

    activeName() {
      const matched = this.$route.matched
      for (let match of matched) {
        if (this.menuItemNames.includes(match.name)) {
          return match.name
        }
      }
      return ''
    },

    openNames() {
      const matched = this.$route.matched
      for (let match of matched) {
        if (this.menuNames.includes(match.name)) {
          return [match.name]
        }
      }
      return []
    }
  }
}
</script>

<style lang="less">
.ivu-menu-dark.prophet-menubar {
  background: #001529;
  margin: 16px 0;

  .ivu-menu-submenu {
    .ivu-menu-submenu-title:hover {
      color: #fff;
      background: #001529;
    }
  }

  .ivu-menu-opened {
    background: #000c17;

    .ivu-menu-submenu-title {
      background: #001529;
    }
  }
}
</style>
