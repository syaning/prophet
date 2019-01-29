<template>
  <div :class="prefixCls">
    <div :class="titleClasses" v-if="title">
      {{ title }}
    </div>
    <Row :gutter="32">
      <Col :xs="24" :sm="12" :md="8"
        :class="itemClasses"
        v-for="item in items" :key="item.key">
        <span :class="itemKeyClasses">{{ item.key }}</span>
        <span>{{ item.value }}</span>
      </Col>
    </Row>
  </div>
</template>

<script>
const prefixCls = 'prophet-description-list'

export default {
  props: {
    title: {
      type: String
    },

    items: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      prefixCls
    }
  },

  computed: {
    titleClasses() {
      return `${prefixCls}-title`
    },

    itemClasses() {
      return `${prefixCls}-item`
    },

    itemKeyClasses() {
      return `${prefixCls}-item-key`
    }
  }
}
</script>

<style lang="less">
.prophet-description-list {
  &-title {
    font-size: 16px;
    font-weight: 500;
    color: rgba(0,0,0,.85);
    margin-bottom: 16px;
  }

  &-item {
    margin-bottom: 16px;
  }

  &-item-key {
    color: rgba(0,0,0,.85);

    &::after {
      content: ":";
      margin-right: 8px;
      color: rgba(0,0,0,.85);
    }
  }
}
</style>
