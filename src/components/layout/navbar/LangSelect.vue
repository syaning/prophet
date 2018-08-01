<template>
  <Dropdown @on-click="setLang">
    <a href="javascript:void(0)">
      <Icon class="lang-select-icon" type="md-globe"></Icon>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem
        v-for="l in langs"
        :key="l.locale"
        :name="l.locale"
        :disabled="lang === l.locale">
        {{ l.name }}
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        { locale: 'en', name: 'English' },
        { locale: 'zh', name: '中文' }
      ]
    }
  },

  computed: {
    lang() {
      return this.$i18n.locale
    }
  },

  methods: {
    setLang(lang) {
      this.$i18n.locale = lang
      this.$store.dispatch('setLang', lang)
    }
  }
}
</script>

<style lang="scss">
.lang-select-icon {
  cursor: pointer;
  color: #80848f;
  font-size: 1rem;

  &:hover {
    color: #2d8cf0;
  }
}
</style>
