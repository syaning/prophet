<template>
  <span>{{ form[item.key] }}</span>
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
