<template>
  <i-switch v-model="form[item.key]" v-bind="item.props" />
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  }
}
</script>
