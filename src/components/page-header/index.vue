<template>
  <div class="page-header">
    <Breadcrumb class="page-header-breadcrumb">
      <BreadcrumbItem v-for="item in items" :key="item.name">
        {{ $t(item.meta.title) }}
      </BreadcrumbItem>
    </Breadcrumb>
    <h1 v-if="title" class="page-header-title">{{ title }}</h1>
    <div v-if="desc" class="page-header-desc">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    desc: {
      type: String
    }
  },

  computed: {
    items() {
      return this.$route.matched
    }
  }
}
</script>

<style lang="less">
.page-header {
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
