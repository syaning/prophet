<template>
  <div style="float: right;">
    <full-screen style="margin-right: 1rem;"></full-screen>
    <lang-select></lang-select>
  </div>
</template>

<script>
import FullScreen from './FullScreen'
import LangSelect from './LangSelect'

export default {
  components: { FullScreen, LangSelect }
}
</script>
