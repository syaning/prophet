<template>
  <span class="prophet-table-action">
    <template v-if="tooltip !== undefined">
      <Tooltip :content="tooltip">
        <Icon :type="icon" :size="20" :color="color" @click="doAction" />
      </Tooltip>
    </template>
    <template v-else>
      <Icon :type="icon" :size="20" :color="color" @click="doAction" />
    </template>
  </span>
</template>

<script>
const colorMap = {
  primary: '#2d8cf0',
  info: '#2db7f5',
  succcess: '#19be6b',
  warning: '#ff9900',
  error: '#ed4014'
}

export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    row: {
      type: Object,
      required: true
    }
  },

  computed: {
    tooltip() {
      const tooltip = this.options.tooltip
      if (tooltip === undefined || tooltip === null) {
        return undefined
      }
      return tooltip
    },

    icon() {
      return this.options.icon
    },

    color() {
      const color = this.options.color
      return colorMap[color] || color || colorMap['primary']
    }
  },

  methods: {
    doAction() {
      const fn = this.options.fn
      if (typeof fn !== 'function') {
        return
      }
      fn(this.row)
    }
  }
}
</script>

<style lang="less">
.prophet-table-action {
  i {
    cursor: pointer;
  }
}
</style>
