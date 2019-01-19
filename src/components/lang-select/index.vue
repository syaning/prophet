<template>
  <Dropdown @on-click="setLocale" placement="bottom-end">
    <a href="javascript:void(0)">
      <Icon
        class="lang-select-icon"
        type="ios-globe-outline"
        color="rgba(0,0,0,.65)" />
    </a>
    <DropdownMenu slot="list">
      <DropdownItem
        v-for="lang in langs"
        :key="lang.locale"
        :name="lang.locale"
        :disabled="lang.locale === locale">
        {{ lang.name }}
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      langs: [
        { locale: 'zh-CN', name: '简体中文' },
        { locale: 'en-US', name: 'English' }
      ]
    }
  },

  computed: {
    ...mapGetters(['locale'])
  },

  methods: {
    ...mapActions(['setLocale'])
  }
}
</script>

<style>
.lang-select-icon {
  cursor: pointer;
  padding: 0 10px;
  font-size: 16px;
}
</style>
