<template>
  <div>
    <div ref="editor" class="editor"></div>
  </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.snow.css'

const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

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

    this.editor.setContents([
      { insert: lorem },
      { insert: '\n\n' },
      { insert: lorem, attributes: { italic: true } },
      { insert: '\n\n' },
      { insert: lorem, attributes: { bold: true } }
    ])
  }
}
</script>

<style scoped>
.editor {
  height: 500px;
  background: #fff;
}
</style>
