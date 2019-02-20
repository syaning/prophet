<template>
  <RadioGroup v-model="form[item.key]" v-bind="item.props">
    <Radio
      v-for="option in item.options"
      :key="option.value"
      :label="option.value"
      v-bind="option.props">
      {{ option.label }}
    </Radio>
  </RadioGroup>
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
