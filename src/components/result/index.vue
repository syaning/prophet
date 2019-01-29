<template>
  <Card dis-hover :bordered="false">
    <div :class="prefixCls">
      <Icon :class="iconClasses" :type="icon" :color="iconColor" />
      <div :class="titleClasses">{{ title }}</div>
      <div :class="descClasses">{{ desc }}</div>
      <div :class="extraClasses" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
      <div :class="actionsClasses" v-if="$slots.actions">
        <slot name="actions"></slot>
      </div>
    </div>
  </Card>
</template>

<script>
const prefixCls = 'prophet-result'

export default {
  props: {
    type: {
      validator: val => ['success', 'fail'].includes(val),
      default: 'scucess'
    },

    title: {
      type: String,
      required: true
    },

    desc: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      prefixCls
    }
  },

  computed: {
    iconClasses() {
      return `${prefixCls}-icon`
    },

    titleClasses() {
      return `${prefixCls}-title`
    },

    descClasses() {
      return `${prefixCls}-desc`
    },

    extraClasses() {
      return `${prefixCls}-extra`
    },

    actionsClasses() {
      return `${prefixCls}-actions`
    },

    icon() {
      return this.type === 'success' ? 'md-checkmark-circle' : 'md-close-circle'
    },

    iconColor() {
      return this.type === 'success' ? '#19be6b' : '#ed4014'
    }
  }
}
</script>

<style lang="less">
.prophet-result {
  margin: 48px auto 16px auto;
  text-align: center;
  width: 72%;

  &-icon {
    font-size: 72px;
    margin-bottom: 24px;
  }

  &-title {
    font-size: 24px;
    color: rgba(0,0,0,.85);
    font-weight: 500;
    line-height: 32px;
    margin-bottom: 16px;
  }

  &-desc {
    color: rgba(0,0,0,.45);
    margin-bottom: 24px;
  }

  &-extra {
    background: #fafafa;
    padding: 24px 40px;
    border-radius: 2px;
    text-align: left;
  }

  &-actions {
    margin-top: 32px;
  }
}
</style>
