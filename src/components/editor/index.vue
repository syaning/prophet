<template>
  <div>
    <div ref="editor" class="editor"></div>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

export default {
  data() {
    return {
      editor: null
    }
  },

  mounted() {
    this.editor = new Quill(this.$refs.editor, {
      placeholder: 'Write something...',
      theme: 'snow'
    })
  }
}
</script>

<style scoped>
.editor {
  height: 500px;
  background: #fff;
}
</style>
