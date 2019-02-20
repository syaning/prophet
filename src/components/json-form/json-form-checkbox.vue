<template>
  <CheckboxGroup v-model="form[item.key]" v-bind="item.props">
    <Checkbox
      v-for="option in item.options"
      :key="option.value"
      :label="option.label"
      :value="option.value">
    </Checkbox>
  </CheckboxGroup>
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
