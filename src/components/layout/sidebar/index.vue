<template>
  <Menu :active-name="activeName" :open-names="openNames" width="auto" theme="dark">
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
      activeName: '',
      openNames: []
    }
  },

  created() {
    this.updateMenuStatus(this.$route)
    this.$router.afterEach(to => {
      this.updateMenuStatus(to)
    })
  },

  methods: {
    updateMenuStatus(route) {
      this.activeName = route.name

      for (let i = 0; i < this.menus.length; i++) {
        const menu = this.menus[i]

        if (menu.name === route.name) {
          this.openNames = []
          break
        }

        if (menu.items) {
          if (menu.items.some(item => item.name === route.name)) {
            this.openNames = [menu.name]
            break
          }
        }
      }
    }
  }
}
</script>
