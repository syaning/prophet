<template>
  <el-container>
    <el-aside width="200px">
      <sidebar></sidebar>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
import Sidebar from './Sidebar'

export default {
  components: { Sidebar }
}
</script>
