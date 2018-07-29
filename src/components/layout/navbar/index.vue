<template>
  <div>
    <img class="logo" src="@/assets/logo.png" />
    <div style="float: right;">
      <full-screen style="margin-right: 1rem;"></full-screen>
      <lang-select></lang-select>
    </div>
  </div>
</template>

<script>
import FullScreen from './FullScreen'
import LangSelect from './LangSelect'

export default {
  components: { FullScreen, LangSelect }
}
</script>

<style>
.logo {
  width: 40px;
  margin: 12px 0;
}
</style>
