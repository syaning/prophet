<template>
  <span class="prophet-table-actions">
    <table-action
      v-for="(options, index) in actions"
      :key="index"
      :options="options"
      :row="row">
    </table-action>
  </span>
</template>

<script>
import TableAction from './TableAction'

export default {
  components: { TableAction },

  props: {
    actions: {
      type: Array,
      required: true
    },
    row: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less">
.prophet-table-actions {
  span {
    margin: 0 2px;

    &:only-child {
      margin: 0;
    }
  }
}
</style>
