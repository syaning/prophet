<template>
  <Dropdown>
    <a href="javascript:void(0)">
      <Icon class="lang-select-icon" type="earth"></Icon>
    </a>
    <DropdownMenu slot="list">
      <DropdownItem v-for="lang in langs" :key="lang.val">{{ lang.name }}</DropdownItem>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        { name: 'English', val: 'en' },
        { name: '中文', val: 'zh' }
      ]
    }
  }
}
</script>

<style lang="scss">
.lang-select-icon {
  cursor: pointer;
  color: #80848f;

  &:hover {
    color: #2d8cf0;
  }
}
</style>
