<template>
  <Select v-model="form[item.key]" v-bind="item.props">
    <Option
      v-for="option in item.options"
      :key="option.value"
      :value="option.value"
      v-bind="option.props">
      {{ option.label }}
    </Option>
  </Select>
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
