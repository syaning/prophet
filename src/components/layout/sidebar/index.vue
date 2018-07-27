<template>
  <Menu :active-name="activeName" width="auto" theme="dark">
    <template v-for="menu in menus">
      <router-link :to="menu.path" v-if="!menu.children" :key="menu.name">
        <MenuItem :name="menu.name">
          {{ menu.meta.title }}
        </MenuItem>
      </router-link>
      <Submenu v-else :name="menu.name" :key="menu.name">
        <template slot="title">{{ menu.meta.title }}</template>
        <router-link v-for="item in menu.children" :key="item.name" :to="item.path">
          <MenuItem :name="item.name">
            {{ item.meta.title }}
          </MenuItem>
        </router-link>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
import { routes } from '@/router'

export default {
  data() {
    return {
      menus: routes,
      activeName: ''
    }
  }
}
</script>
