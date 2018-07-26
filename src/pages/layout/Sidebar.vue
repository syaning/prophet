<template>
  <el-scrollbar>
    <el-menu
      class="sidebar"
      mode="verticle"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <div v-for="menu in menus" :key="menu.path || menu.path">
        <el-menu-item v-if="!menu.children" :index="menu.name || menu.path">{{ menu.meta.title }}</el-menu-item>
        <el-submenu v-else :index="menu.name || menu.path">
          <span slot="title">{{ menu.meta.title }}</span>
          <el-menu-item v-for="item in menu.children" :key="item.path" :index="item.name || item.path">
            {{ item.meta.title }}
          </el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { routes } from '@/router'

export default {
  data() {
    return {
      menus: routes
    }
  }
}
</script>

<style>
.sidebar {
  height: 100vh;
}
</style>
