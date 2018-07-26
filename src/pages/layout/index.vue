<template>
  <el-container>
    <el-aside width="200px">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <navbar>HEADER</navbar>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  components: { Sidebar }
}
</script>

<style>
.header {
  line-height: 60px;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
}
</style>
