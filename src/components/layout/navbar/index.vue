<template>
  <div>
    <img class="logo" src="@/assets/logo.png" />
    <bread-crumbs class="breadcrumbs"></bread-crumbs>
    <div style="float: right;">
      <full-screen style="margin-right: 1rem;"></full-screen>
      <lang-select></lang-select>
      <user-info style="margin-left: 1.5rem;"></user-info>
    </div>
  </div>
</template>

<script>
import BreadCrumbs from './BreadCrumbs'
import FullScreen from './FullScreen'
import LangSelect from './LangSelect'
import UserInfo from './UserInfo'

export default {
  components: {
    BreadCrumbs,
    FullScreen,
    LangSelect,
    UserInfo
  }
}
</script>

<style>
.logo {
  width: 40px;
  margin: 12px 0;
  float: left;
}

.breadcrumbs {
  float: left;
  margin-left: 20px;
}
</style>
