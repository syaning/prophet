<template>
  <Dropdown :class="prefixCls" placement="bottom-end" @on-click="setLocale">
    <a href="javascript:void(0)">
      <Icon :class="iconClasses" type="ios-globe-outline" />
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

const prefixCls = 'prophet-select-lang'

export default {
  data() {
    return {
      prefixCls,
      langs: [
        { locale: 'zh-CN', name: '简体中文' },
        { locale: 'en-US', name: 'English' }
      ]
    }
  },

  computed: {
    ...mapGetters(['locale']),

    iconClasses() {
      return `${prefixCls}-icon`
    }
  },

  methods: {
    ...mapActions(['setLocale'])
  }
}
</script>

<style lang="less">
.prophet-select-lang {
  &-icon {
    padding: 0 10px;
    font-size: 16px;
    color: rgba(0,0,0,.65);
    cursor: pointer;
  }
}
</style>
