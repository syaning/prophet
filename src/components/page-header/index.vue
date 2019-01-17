<template>
  <div class="page-header">
    <Breadcrumb class="page-header-breadcrumb">
      <BreadcrumbItem v-for="item in items" :key="item.name">
        {{ $t(item.meta.title) }}
      </BreadcrumbItem>
    </Breadcrumb>
    <h1>{{ title }}</h1>
    <div>{{ desc }}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    desc: {
      type: String,
      required: true
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

  h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 16px;
  }
}

.page-header-breadcrumb {
  margin-bottom: 16px;

  > span:last-child {
    font-weight: 400;
  }
}
</style>
