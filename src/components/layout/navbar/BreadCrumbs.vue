<template>
  <Breadcrumb>
    <BreadcrumbItem v-for="route in routes" :key="route.name">
      {{ $t(`route.${route.meta.title}`) }}
    </BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  computed: {
    routes() {
      return this.$route.matched.filter(route => !!route.name)
    }
  }
}
</script>
