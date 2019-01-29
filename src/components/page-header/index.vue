<template>
  <div :class="prefixCls">
    <Breadcrumb :class="breadcrumbClasses">
      <BreadcrumbItem v-for="item in items" :key="item.name">
        {{ $t(item.meta.title) }}
      </BreadcrumbItem>
    </Breadcrumb>
    <h1 v-if="title" :class="titleClasses">{{ title }}</h1>
    <div v-if="desc" :class="descClasses">{{ desc }}</div>
  </div>
</template>

<script>
const prefixCls = 'prophet-page-header'

export default {
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  },

  data() {
    return {
      prefixCls
    }
  },

  computed: {
    breadcrumbClasses() {
      return `${prefixCls}-breadcrumb`
    },

    titleClasses() {
      return `${prefixCls}-title`
    },

    descClasses() {
      return `${prefixCls}-desc`
    },

    items() {
      return this.$route.matched
    }
  }
}
</script>

<style lang="less">
.prophet-page-header {
  background: #fff;
  padding: 16px 32px;
  border-bottom: 1px solid #e8e8e8;
  margin: -22px -24px 24px -24px;

  &-breadcrumb > span:last-child {
    font-weight: 400;
  }

  &-title {
    font-size: 20px;
    font-weight: 500;
    margin-top: 16px;
  }

  &-desc {
    margin-top: 16px;
  }
}
</style>
