<template>
  <div class="prophet-description-list">
    <div class="prophet-description-list-title" v-if="title">
      {{ title }}
    </div>
    <Row :gutter="32">
      <Col
        class="prophet-description-list-item"
        v-for="item in items" :key="item.key"
        :xs="24" :sm="12" :md="8">
        <span class="prophet-description-list-item-key">{{ item.key }}</span>
        <span>{{ item.value }}</span>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },

    items: {
      type: Array,
      required: true
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
