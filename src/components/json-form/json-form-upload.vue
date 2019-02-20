<template>
  <Upload
    action=""
    :show-upload-list="false"
    :before-upload="beforeUpload"
    v-bind="item.props">
    <span v-if="form[item.key]">
      {{ form[item.key].name }}
    </span>
    <Button v-else>
      {{ item.props.placeholder || 'Select file(s)' }}
    </Button>
  </Upload>
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
  },

  methods: {
    beforeUpload(file) {
      this.form[this.item.key] = file
      return false
    }
  }
}
</script>
