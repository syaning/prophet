<template>
  <Form ref="form" :model="form" :label-width="100">
    <FormItem v-for="item in items" :key="item.key" v-bind="item.itemProps">
      <slot :name="item.key">
        <component :is="item.tag" :item="item" :form="form"></component>
      </slot>
    </FormItem>

    <slot name="footer">
      <FormItem>
        <Button @click="reset" style="margin-right: 10px;">
          {{ $t('components.jsonForm.reset') }}
        </Button>
        <Button type="primary" @click="submit">
          {{ $t('components.jsonForm.submit') }}
        </Button>
      </FormItem>
    </slot>
  </Form>
</template>

<script>
/**
 * Schema:
 * [{
 *   key: 'title',
 *   slot: 'title',
 *   type: 'input/text/password/textarea/url/email/date/radio/select/checkbox/upload/readonly',
 *   props: {
 *     options: [{ title: '', value: '' }]
 *   },
 *   props(form) {
 *     return {}
 *   },
 *   options: [{ label: '', value: '', props: {} }],
 *   options(form) {
 *     return []
 *   },
 *   itemProps: {
 *     label: 'Title'
 *   },
 *   itemProps(form) {
 *     return {}
 *   }
 * }]
 */

import JsonFormInput from './json-form-input'
import JsonFormReadonly from './json-form-readonly'
import JsonFormCheckbox from './json-form-checkbox'
import JsonFormRadio from './json-form-radio'
import JsonFormSelect from './json-form-select'
import JsonFormSwitch from './json-form-switch'
import JsonFormUpload from './json-form-upload'

export default {
  components: {
    JsonFormInput,
    JsonFormReadonly,
    JsonFormCheckbox,
    JsonFormRadio,
    JsonFormSelect,
    JsonFormSwitch,
    JsonFormUpload
  },

  props: {
    schema: {
      type: Array,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },

  computed: {
    items() {
      return this.schema.map(item => this.computeFormItem(item, this.form))
    }
  },

  methods: {
    computeFormItem(itemSchema, form) {
      const item = { ...itemSchema }
      const inputTypes = ['text', 'password', 'textarea', 'url', 'email', 'date']
      const selectTypes = ['radio', 'select', 'checkbox']

      // slot
      item.slot = item.slot || item.key

      // compute props
      if (typeof item.props === 'function') {
        item.props = item.props.call(null, form)
      }
      item.props = item.props || {}

      // compute item props
      if (typeof item.itemProps === 'function') {
        item.itemProps = item.itemProps.call(null, form)
      }
      item.itemProps = item.itemProps || {}
      item.itemProps.prop = item.key

      // input types
      if (inputTypes.includes(item.type)) {
        item.props.type = item.type
        item.type = 'input'
      }

      // select types
      if (selectTypes.includes(item.type)) {
        if (typeof item.options === 'function') {
          item.options = item.options.call(null, form)
        }
        item.options = (item.options || []).map(option => {
          if (typeof option !== 'object') {
            return { label: option, value: option, props: {} }
          }
          option.props = option.props || {}
          return option
        })
      }

      item.tag = `json-form-${item.type}`

      return item
    },

    validate(fn) {
      this.$refs.form.validate(fn)
    },

    reset() {
      return this.$refs.form.resetFields()
    },

    submit() {
      this.validate(valid => {
        if (valid) {
          this.$emit('submit', this.form)
        }
      })
    }
  }
}
</script>
