<template>
  <Menu :active-name="activeName" width="auto" theme="dark">
    <template v-for="menu in menus">
      <router-link :to="{ name: menu.name }" v-if="!menu.items" :key="menu.name">
        <MenuItem :name="menu.name">
          <Icon :type="menu.meta.icon"></Icon>
          {{ $t(`route.${menu.meta.title}`) }}
        </MenuItem>
      </router-link>
      <Submenu v-else :name="menu.name" :key="menu.name">
        <template slot="title">
          <Icon :type="menu.meta.icon"></Icon>
          {{ $t(`route.${menu.meta.title}`) }}
        </template>
        <router-link v-for="item in menu.items" :key="item.name" :to="{ name: item.name }">
          <MenuItem :name="item.name">
            {{ $t(`route.${item.meta.title}`) }}
          </MenuItem>
        </router-link>
      </Submenu>
    </template>
  </Menu>
</template>

<script>
import { menus } from '@/router'

export default {
  data() {
    return {
      menus,
      activeName: 'dashboard'
    }
  }
}
</script>
